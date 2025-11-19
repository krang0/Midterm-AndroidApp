import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView, StatusBar, Image, FlatList } from 'react-native'; 

const GALLERY_DATA = [
  {id: '1', caption: 'Pencil', url: 'https://fastly.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo'},
  {id: '2', caption: 'X', url: 'https://fastly.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo'},
  {id: '3', caption: 'Gala', url: 'https://fastly.picsum.photos/id/617/200/300.jpg?hmac=WVwPHGFiGQ3OhdyeRk0pQ82EUCJuksc-Zf7YjirDr9Q'},
  {id: '4', caption: 'CL', url: 'https://fastly.picsum.photos/id/845/200/300.jpg?hmac=DfR-wrajwQRkxeIHc0FhGL5Pn8rIOnYPzHRdY08PajE'},
  {id: '5', caption: 'F13', url: 'https://fastly.picsum.photos/id/399/200/300.jpg?hmac=qEzeLaSETRM-rnt81YtrfXeUeHQnjAkbWh7rc8NBaMQ'},
  {id: '6', caption: 'UE', url: 'https://fastly.picsum.photos/id/56/200/300.jpg?hmac=XmVgSk2B8hc9Smojh4o14JnHBHBM8Gj0ePS78sxZbzI'},
  {id: '6', caption: 'BB', url: 'https://fastly.picsum.photos/id/407/200/300.jpg?hmac=2o7TUioGmzxVywnGxQPp4rBF-rDgT9d5Q3QtpEGlDwI'},
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null); 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" /> 
      
      <Text style={styles.title}>SimpleGallery</Text>

      <View style={styles.viewerContainer}>
        {selectedImage ? (
          <>
            <Image 
              source={{ uri: selectedImage.url }} 
              style={{width: 100, height: 100}} 
              resizeMode="contain" 
            />
            <Text>{selectedImage.caption}</Text>
          </>
        ) : (
          <View>
            <Text>Tap an image to view it</Text>
          </View>
        )}
      </View>

      <View style={styles.gridContainer}>
        <Text>Image Grid will be here</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: 40, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  viewerContainer: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
  },
  gridContainer: {
    flex: 1, 
    padding: 5,
    backgroundColor: '#ddd'
  },
});