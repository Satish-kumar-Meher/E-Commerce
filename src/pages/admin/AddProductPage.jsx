import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import { X } from "lucide-react";

const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity : 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });


    // Add Product Function
    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("all fields are required")
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Add product successfully");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Add product failed");
        }

    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                {/* Login Form  */}
                <div className="login_Form bg-[#bdf6ee] px-8 py-6 border border-[#57b7aa] rounded-xl shadow-md">
                     {/* Cross Icon */}
                     <button
                        className="  text-[#19332f] hover:text-[#356e67]"
                        onClick={() => navigate("/admin-dashboard")}
                    >
                        <X size={24} />
                    </button>
                     

                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-[#57b7aa] '>
                            Add Product
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Product Title'
                            className='bg-[#bdf6ee] border text-[#57b7aa] border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none placeholder-[#57b7aa]'
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Product Price'
                            className='bg-[#bdf6ee] border text-[#57b7aa] border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none placeholder-[#57b7aa]'
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            placeholder='Product Image Url'
                            className='bg-[#bdf6ee] border text-[#57b7aa] border-[#57b7aa] px-2 py-2 w-96 rounded-md outline-none placeholder-[#57b7aa]'
                        />
                    </div>

                    {/* Input Four  */}
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                            className="w-full px-1 py-2 text-[#57b7aa] bg-[#bdf6ee] border border-[#57b7aa] rounded-md outline-none  ">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Input Five  */}
                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }} name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-[#57b7aa] bg-[#bdf6ee] border border-[#57b7aa] rounded-md outline-none placeholder-[#57b7aa] ">

                        </textarea>
                    </div>

                    {/* Add Product Button  */}
                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-[#57b7aa] hover:bg-[#356e67] w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;