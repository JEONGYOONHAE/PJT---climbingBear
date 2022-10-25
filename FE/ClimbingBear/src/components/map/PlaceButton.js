import React, {useEffect, useState} from 'react';
// (공부) SafeAreaView 가 정확히 무엇인지 모른다
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

// React 와 구조 유사하며 return template 에는 View 로 무조건 감싸줘야 한다
const PlaceButton = () => {
  return (
    <View>
      <Text style={styles.temptext}>
        여긴 주위 산을 띄워주는 버튼 컴포넌트입니다!
      </Text>
    </View>
  );
};

export default PlaceButton;

const styles = StyleSheet.create({
  temptext: {
    fontSize: 20,
  },
});
