import * as React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import mergeExtraData from '../../utils/mergeExtraData';
import colors from '~/config/colors';

export default class OnboardingSlide extends React.Component {
  state = {
    width: 0,
    height: 0,
    activeIndex: 0,
  };

  goToSlide = (pageNum) => {
    this.setState({ activeIndex: pageNum });
    this.flatList?.scrollToOffset({
      offset: pageNum * this.state.width,
    });
  };

  getListRef = () => this.flatList;

  _renderItem = (flatListArgs) => {
    const { width, height } = this.state;
    const props = { ...flatListArgs, dimensions: { width, height } };
    return (
      <View style={{ width, flex: 1 }}>{this.props.renderItem(props)}</View>
    );
  };

  _renderButton = (label, onPress) => {
    const content = this._renderDefaultButton(label);
    return this._renderOuterButton(content, label, onPress);
  };

  _renderDefaultButton = (label) => {
    let content = <Text style={styles.buttonText}>{label}</Text>;
    return content;
  };

  _renderOuterButton = (content, label, onPress) => {
    const style =
      label === 'Skip' || label === 'Prev'
        ? styles.leftButtonContainer
        : styles.rightButtonContainer;
    return (
      <View style={style}>
        <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
      </View>
    );
  };

  _renderNextButton = () =>
    this._renderButton('Next', () =>
      this.goToSlide(this.state.activeIndex + 1, true),
    );

  _renderPrevButton = () =>
    this._renderButton('Prev', () =>
      this.goToSlide(this.state.activeIndex - 1, true),
    );

  _renderPagination = () => {
    const isLastSlide = this.state.activeIndex === this.props.data.length - 1;
    const isFirstSlide = this.state.activeIndex === 0;

    const secondaryButton = !isFirstSlide && this._renderPrevButton();
    const primaryButton = isLastSlide ? null : this._renderNextButton();

    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {this.props.data.length > 1 &&
              this.props.data.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        i === this.state.activeIndex
                          ? colors.white
                          : 'rgba(0, 0, 0, .2)',
                    },
                  ]}
                  onPress={() => this.goToSlide(i, true)}
                />
              ))}
          </View>
          {primaryButton}
          {secondaryButton}
        </SafeAreaView>
      </View>
    );
  };

  _onMomentumScrollEnd = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offset / this.state.width);
    if (newIndex === this.state.activeIndex) {
      return;
    }
    this.setState({ activeIndex: newIndex });
  };

  _onLayout = ({ nativeEvent }) => {
    const { width, height } = nativeEvent.layout;
    if (width !== this.state.width || height !== this.state.height) {
      this.setState({ width, height });
      const func = () => {
        this.flatList?.scrollToOffset({
          offset: this.state.activeIndex * width,
          animated: false,
        });
      };
      setTimeout(func, 0);
    }
  };

  render() {
    const {
      renderPagination,
      renderItem,
      data,
      extraData,
      ...otherProps
    } = this.props;

    const extra = mergeExtraData(extraData, this.state.width);

    return (
      <View style={styles.flexOne}>
        <FlatList
          ref={(ref) => (this.flatList = ref)}
          data={this.props.data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.flatList}
          renderItem={this._renderItem}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          extraData={extra}
          onLayout={this._onLayout}
          initialNumToRender={data.length}
          {...otherProps}
        />
        {this._renderPagination()}
      </View>
    );
  }
}
