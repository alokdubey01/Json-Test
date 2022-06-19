import React,{useState,useEffect} from 'react'
import axios from 'axios';

export const Images = () => {
  const [product, setProduct] = useState([]);
  const [productImg, setProductImg] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get("http://localhost:4000/product");
      setProduct(res.data);
      setProductImg(res.data.image);
      // setLoading(true)
    } catch (err) {
      alert(err.msg);
    }
  };
  return (
    <div>
         {product.map((item) => (
            <img
              className="multi__image"
              // src={require('./upload/images/8545-2021-09-17.jpg')}
              src={item.image}
              alt=""
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
          ))}
    </div>
  )
}
