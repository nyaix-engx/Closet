import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable, Image, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScaleAnimation from './ScaleAnimation';
import ImagePicker from 'react-native-image-picker';
import Button from './Button';

const UploadImageModal = props => {
  const insets = useSafeAreaInsets();
  const [filePath, setFilePath] = useState({});

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };

  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: hp(2),
          paddingHorizontal: hp(2),
          borderTopLeftRadius:hp(2),
          borderTopRightRadius:hp(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginBottom:hp(3)
          }}>
          <View style={{flex: 5, paddingHorizontal: hp(1)}}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                textAlign:'center',
                fontSize: hp(2),
                paddingVertical: hp(1),
              }}>
              Upload Photo
            </Text>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                textAlign:'center',
                fontSize: hp(1.8),
                color: '#adadad',
              }}>
              Choose your profile picture
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: insets.bottom,
          }}>
          <View style={{paddingHorizontal:hp(3),marginBottom:hp(1)}}>
            <ScaleAnimation onPress={()=>{}} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: '#fb7ca0',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                  }}>
                  Take Photo
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={{paddingHorizontal:hp(3),marginBottom:hp(1)}}>
            <ScaleAnimation onPress={chooseFile} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: '#fb7ca0',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                  }}>
                  Choose from library
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={{paddingHorizontal:hp(3),marginBottom:hp(1)}}>
            <ScaleAnimation onPress={()=>props.setShowModal()} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: 'grey',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                  }}>
                  Cancel
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UploadImageModal;
