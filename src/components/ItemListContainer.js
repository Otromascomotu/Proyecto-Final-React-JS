import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemListContainer = ({ name }) => {
  const { categoryid } = useParams();
  const [item, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    //console.log("categoryid en ItemListContainer" + categoryid);
    if (categoryid) {
      const highprice = db
        .collection("items")
        .where("categoryid", "==", categoryid);
      highprice
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
          //console.log("No results!");
          }
          setItems(querySnapshot.docs.map((doc) => doc.data()));
        })
        .catch((error) => {
          //console.log("Error searching items", error);
        })
        .finally(() => {});
    } else {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
          //console.log("No results!");
          }
          //console.log(querySnapshot.docs.map((doc) => doc.data()));
          setItems(querySnapshot.docs.map((doc) => doc.data()));
        })
        .catch((error) => {
          //console.log("Error searching items", error);
        })
        .finally(() => {});
    }
  }, [categoryid]);

  return (
    <div name="test">
      <div class="p-3 mb-2 bg-dark text-white">
        {name}
        <ItemList items={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
