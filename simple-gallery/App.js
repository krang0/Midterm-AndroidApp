import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView, StatusBar, Image, FlatList } from 'react-native'; 

const GALLERY_DATA = [
  {id: '1', caption: 'Pencil', url: 'https://fastly.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo'},
  {id: '2', caption: 'X', url: 'https://fastly.picsum.photos/id/239/200/300.jpg?hmac=jBV5mUiY1RXDAmu4rQXOdWeutyztlxqFSOVpnJ-QUb8'},
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
              style={styles.mainImage}
              resizeMode="contain" 
            />
            <Text style={styles.captionText}>{selectedImage.caption}</Text>
          </>
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Tap an image to view it</Text>
          </View>
        )}
      </View>

      <View style={styles.gridContainer}>
        <FlatList
          data={GALLERY_DATA}
          keyExtractor={(item) => item.id}
          numColumns={2} 
          renderItem={({ item }) => (
            <Pressable
              style={styles.thumbnailContainer}
              onPress={() => setSelectedImage(item)} 
            >
              <Image
                source={{ uri: item.url }}
                style={styles.thumbnailImage}
              />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: StatusBar.currentHeight || 40, 
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
    overflow: 'hidden',
  },
  mainImage: {
    width: '90%',
    height: '80%',
    borderRadius: 6,
    marginBottom: 10,
  },
  captionText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
  },
  placeholder: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  gridContainer: {
    flex: 1,
    padding: 5,
  },
  thumbnailContainer: {
    flex: 1, 
    margin: 5,
    aspectRatio: 1, 
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
});