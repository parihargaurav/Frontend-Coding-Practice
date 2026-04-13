const Products = ({image, title}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3>{title}</h3>
    </div>
  )
}
export default Products