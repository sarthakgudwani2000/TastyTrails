// import React from "react";
// import { View, Text, Image } from "react-native";

// export default function About(props) {
//   const image = "https://assets.cntraveller.in/photos/62975dd66a6d562435831f90/master/pass/new-restaurants-delhi-lead.jpg";
//   const title = "Farmhouse Kitchen Thai Cuisine";
//   const description =  "THai • Comfort Food • $$ • 🎫 • 4⭐ (2913+)";
//   return (
//     <View>
//       <RestaurantImage image={image} />
//       <RestaurantTitle title={title} />
//       <Text>About</Text>
//     </View>
//   );
// }

// const RestaurantImage = (props) => (
//   <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
// );

// const RestaurantTitle = (props) => (
//   <Text style={{ fontWeight: 600, fontSize: 29, marginTop: 10, marginHorizontal:15 }}>{props.title}{props.title}</Text>
// )



import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
  // const { name, image, price, reviews, rating, categories } =
  //   props.route.params;

  // const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  // const description = `${formattedCategories} ${
  //   price ? " • " + price : ""
  // } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  const image = "https://assets.cntraveller.in/photos/62975dd66a6d562435831f90/master/pass/new-restaurants-delhi-lead.jpg";
  
  const title = "Faemhouse Kitchen Thai Cuisine";
  const description = "Thai • Comfort Food • $$ • 🎫 • 4⭐ (2913+)";

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);