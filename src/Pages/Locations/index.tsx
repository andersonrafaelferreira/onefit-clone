import React, { Children } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Feather, FontAwesome5, Octicons, AntDesign, Foundation } from '@expo/vector-icons';

import map from './assets/map.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

// import { Container } from './styles';

function Header() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<FontAwesome5 name="search" size={24} color="transparent" />
        <View>
            <Text style={styles.pageTitle}>Locations</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: "baseline"}}>
                <Text style={styles.pageSubtitle}>Amsterdam</Text>
                <FontAwesome5 name="chevron-down" size={10} color="#666" />
            </TouchableOpacity>
        </View>
				<TouchableOpacity>
	        <FontAwesome5 name="search" size={20} color="#333" />
				</TouchableOpacity>
      </View>
    );
}

function Filters() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity style={styles.actionButton}>
            <Octicons name="settings" size={16} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonTitle}>Distance</Text>
            <FontAwesome5 name="chevron-down" size={10} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonTitle}>Categories</Text>
            <FontAwesome5 name="chevron-down" size={10} color="#666" />
        </TouchableOpacity>
         <TouchableOpacity style={styles.actionButton}>
            <Foundation name="heart" size={16} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonTitle}>More filters</Text>
        </TouchableOpacity>
      </View>
    );
}

const Locations: React.FC = () => {
  return (
		<View style={{ backgroundColor: 'white', paddingTop: 40}}>
      <View style={{ margin: 12 }}>
          <Header />
          <Filters />
          <TouchableOpacity>
            <Image source={map} style={{marginVertical: 16, maxWidth: '100%'}} />
          </TouchableOpacity>
          <ScrollView 
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{
							paddingBottom: 400,
							marginBottom: 400,
						}}
					>
           <View>
            <Image source={img1}/>
            <Text style={styles.place}>Other, Bootcamp, HIIT</Text>
            <Text style={styles.location}>BEAT81</Text>
            <View style={styles.rating}>
                <AntDesign name="star" size={10} color="#fff" />
                <Text style={styles.ratingText}>4.8</Text>
            </View>
           </View>

					<View style={{ marginTop: 16}}>
            <Image source={img2}/>
            <Text style={styles.place}>BBB, Yoga, Pilates and More</Text>
            <Text style={styles.location}>Studio 191 West</Text>
            <View style={styles.rating}>
                <AntDesign name="star" size={10} color="#fff" />
                <Text style={styles.ratingText}>4.8</Text>
            </View>
           </View>

          </ScrollView>
      </View>
			</View>
  );
}

export default Locations;

const styles = StyleSheet.create({
    pageTitle:{
        color: "#333", 
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    pageSubtitle:{
        color: "#666", 
        fontSize: 13,
        marginRight: 4
    },   
    actionButtonTitle:{
        color: "#000", 
        fontSize: 13,
        marginRight: 4
    },
    actionButton:{
        backgroundColor: '#f9f9f9',
        padding: 6,
        flexDirection: "row",
        alignItems: 'center'
    },
		rating: {
			flexDirection: 'row',
			backgroundColor: '#191e23', 
			padding: 6,
			paddingHorizontal: 10,
			width: 58,
			borderRadius: 4,
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: 10
		},	
		ratingText: {
			color: '#fff',
			fontSize: 12,
			fontWeight: 'bold'
		},	
		place: {
			color: '#9ca9bc',
			fontSize: 16,
			marginVertical: 8,
		},	
		location: {
			color: '#333',
			fontSize: 16,
			fontWeight: 'bold',
		},
})