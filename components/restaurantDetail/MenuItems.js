import { View, Text, StyleSheet, Image, ScrollView, TurboModuleRegistry } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const foods = [
    {
        title: "Cheeseburger",
        description: "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a toasted bun.",
        price: "$18.99",
        image: "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg"
    },
    {
        title: "Caesar Salad",
        description: "Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and shredded Parmesan cheese.",
        price: "$16.49",
        image: "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg"
    },
    {
        title: "Margherita Pizza",
        description: "Classic Italian pizza topped with fresh mozzarella cheese, tomatoes, basil leaves, and a drizzle of olive oil.",
        price: "$10.99",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ33P2v50m40XHTMO_nsMc_tx42syV0DTx3-gW40agUQ&s"
    },
    {
        title: "Chocolate Brownie",
        description: "Decadent chocolate brownie served warm with a scoop of vanilla ice cream and drizzled with chocolate sauce.",
        price: "$14.99",
        image: "https://recipesblob.oetker.in/assets/0e7149831748458c9502e361e889f726/964x526/brownie-with-vanilla-ice-cream.jpg"
    },
    {
        title: "Iced Tea",
        description: "Chilled black tea sweetened with a hint of sugar and served over ice.",
        price: "$3.99",
        image: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/2020-02-12-1.jpg"
    },
    {
        title: "Margarita Cocktail",
        description: "Classic cocktail made with tequila, lime juice, and a splash of orange liqueur.",
        price: "$12.99",
        image: "https://www.sainsburysmagazine.co.uk/uploads/media/720x770/08/9438-Margarita.jpg?v=1-0"
    }
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
    scrollViewContainer: {
        height: 570,
    },
});

export default function MenuItems() {
    const [checkedItems, setCheckedItems] = React.useState([]);

    const handleCheckboxToggle = (index) => {
        const isChecked = checkedItems.includes(index);
        setCheckedItems(
            isChecked
                ? checkedItems.filter((item) => item !== index)
                : [...checkedItems, index]
        );
    };

    return (
        <View style={styles.scrollViewContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItemStyle}>
                            <BouncyCheckbox
                                isChecked={checkedItems.includes(index)}
                                innerIconStyle={{
                                    borderRadius: 0,
                                    borderWidth: 0,
                                    backgroundColor: checkedItems.includes(index) ? "green" : "#e3e3e3",
                                }}
                                fillColor="green"
                                onPress={() => handleCheckboxToggle(index)}
                            />

                            <FoodInformatiom food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const FoodInformatiom = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
);