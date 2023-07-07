import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import { FaUserCircle } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";

const Navbar = ({ products }) => {

    console.log(products)
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const getSearachTerm = (event) => {
        const text = event.target.value;
        searchHandler(text);
    }

    const searchHandler = (searchTerm) => {
        setSearch(searchTerm);
        if (search !== '') {
            const newList = products?.filter(product => {
                return Object.values(product)
                    .join(' ')
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            setSearchResult(newList);
        }
        else {
            setSearchResult(products);
        }
    }
    return (
        <div className="nav__container">
            <div className="signIn__container flex justify-between h-16 items-center">
                <div>
                    <Link to='/'>
                        <svg width="144" height="33" viewBox="0 0 144 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.248 24.256C6.69067 24.256 5.304 23.9893 4.088 23.456C2.872 22.9227 1.912 22.1973 1.208 21.28C0.504 20.3413 0.109333 19.296 0.024 18.144H5.432C5.496 18.7627 5.784 19.264 6.296 19.648C6.808 20.032 7.43733 20.224 8.184 20.224C8.86667 20.224 9.38933 20.096 9.752 19.84C10.136 19.5627 10.328 19.2107 10.328 18.784C10.328 18.272 10.0613 17.8987 9.528 17.664C8.99467 17.408 8.13067 17.1307 6.936 16.832C5.656 16.5333 4.58933 16.224 3.736 15.904C2.88267 15.5627 2.14667 15.04 1.528 14.336C0.909333 13.6107 0.6 12.64 0.6 11.424C0.6 10.4 0.877333 9.472 1.432 8.64C2.008 7.78667 2.84 7.11467 3.928 6.624C5.03733 6.13333 6.34933 5.888 7.864 5.888C10.104 5.888 11.864 6.44267 13.144 7.552C14.4453 8.66133 15.192 10.1333 15.384 11.968H10.328C10.2427 11.3493 9.96533 10.8587 9.496 10.496C9.048 10.1333 8.45067 9.952 7.704 9.952C7.064 9.952 6.57333 10.08 6.232 10.336C5.89067 10.5707 5.72 10.9013 5.72 11.328C5.72 11.84 5.98667 12.224 6.52 12.48C7.07467 12.736 7.928 12.992 9.08 13.248C10.4027 13.5893 11.48 13.9307 12.312 14.272C13.144 14.592 13.8693 15.1253 14.488 15.872C15.128 16.5973 15.4587 17.5787 15.48 18.816C15.48 19.8613 15.1813 20.8 14.584 21.632C14.008 22.4427 13.1653 23.0827 12.056 23.552C10.968 24.0213 9.69867 24.256 8.248 24.256ZM29.8038 5.952C31.8518 5.952 33.4944 6.63467 34.7318 8C35.9691 9.344 36.5878 11.2 36.5878 13.568V24H31.1478V14.304C31.1478 13.1093 30.8384 12.1813 30.2198 11.52C29.6011 10.8587 28.7691 10.528 27.7238 10.528C26.6784 10.528 25.8464 10.8587 25.2278 11.52C24.6091 12.1813 24.2998 13.1093 24.2998 14.304V24H18.8278V0.32H24.2998V8.544C24.8544 7.75467 25.6118 7.12533 26.5718 6.656C27.5318 6.18667 28.6091 5.952 29.8038 5.952ZM48.5183 24.256C46.7689 24.256 45.1903 23.8827 43.7823 23.136C42.3956 22.3893 41.2969 21.3227 40.4863 19.936C39.6969 18.5493 39.3023 16.928 39.3023 15.072C39.3023 13.2373 39.7076 11.6267 40.5182 10.24C41.3289 8.832 42.4383 7.75467 43.8463 7.008C45.2543 6.26133 46.8329 5.888 48.5823 5.888C50.3316 5.888 51.9103 6.26133 53.3183 7.008C54.7263 7.75467 55.8356 8.832 56.6463 10.24C57.4569 11.6267 57.8623 13.2373 57.8623 15.072C57.8623 16.9067 57.4463 18.528 56.6143 19.936C55.8036 21.3227 54.6836 22.3893 53.2543 23.136C51.8463 23.8827 50.2676 24.256 48.5183 24.256ZM48.5183 19.52C49.5636 19.52 50.4489 19.136 51.1743 18.368C51.9209 17.6 52.2943 16.5013 52.2943 15.072C52.2943 13.6427 51.9316 12.544 51.2063 11.776C50.5023 11.008 49.6276 10.624 48.5823 10.624C47.5156 10.624 46.6303 11.008 45.9263 11.776C45.2223 12.5227 44.8703 13.6213 44.8703 15.072C44.8703 16.5013 45.2116 17.6 45.8943 18.368C46.5983 19.136 47.4729 19.52 48.5183 19.52ZM66.2373 8.672C66.7706 7.84 67.5066 7.168 68.4453 6.656C69.3839 6.144 70.4826 5.888 71.7413 5.888C73.2133 5.888 74.5466 6.26133 75.7413 7.008C76.9359 7.75467 77.8746 8.82133 78.5573 10.208C79.2613 11.5947 79.6133 13.2053 79.6133 15.04C79.6133 16.8747 79.2613 18.496 78.5573 19.904C77.8746 21.2907 76.9359 22.368 75.7413 23.136C74.5466 23.8827 73.2133 24.256 71.7413 24.256C70.5039 24.256 69.4053 24 68.4453 23.488C67.5066 22.976 66.7706 22.3147 66.2373 21.504V32.512H60.7653V6.144H66.2373V8.672ZM74.0453 15.04C74.0453 13.6747 73.6613 12.608 72.8933 11.84C72.1466 11.0507 71.2186 10.656 70.1093 10.656C69.0213 10.656 68.0933 11.0507 67.3253 11.84C66.5786 12.6293 66.2053 13.7067 66.2053 15.072C66.2053 16.4373 66.5786 17.5147 67.3253 18.304C68.0933 19.0933 69.0213 19.488 70.1093 19.488C71.1973 19.488 72.1253 19.0933 72.8933 18.304C73.6613 17.4933 74.0453 16.4053 74.0453 15.04ZM82.036 15.264C82.036 13.4507 82.3987 11.872 83.124 10.528C83.8493 9.16267 84.852 8.11733 86.132 7.392C87.412 6.64533 88.8733 6.272 90.516 6.272C92.6707 6.272 94.4413 6.80533 95.828 7.872C97.236 8.93867 98.1427 10.3893 98.548 12.224H96.148C95.8493 10.9653 95.1987 9.984 94.196 9.28C93.2147 8.55467 91.988 8.192 90.516 8.192C89.3427 8.192 88.2867 8.45867 87.348 8.992C86.4093 9.52533 85.6627 10.3253 85.108 11.392C84.5747 12.4373 84.308 13.728 84.308 15.264C84.308 16.8 84.5747 18.1013 85.108 19.168C85.6627 20.2347 86.4093 21.0347 87.348 21.568C88.2867 22.1013 89.3427 22.368 90.516 22.368C91.988 22.368 93.2147 22.016 94.196 21.312C95.1987 20.5867 95.8493 19.584 96.148 18.304H98.548C98.1427 20.096 97.236 21.536 95.828 22.624C94.42 23.712 92.6493 24.256 90.516 24.256C88.8733 24.256 87.412 23.8933 86.132 23.168C84.852 22.4213 83.8493 21.376 83.124 20.032C82.3987 18.6667 82.036 17.0773 82.036 15.264ZM101.661 15.232C101.661 13.44 102.013 11.872 102.717 10.528C103.442 9.16267 104.434 8.11733 105.693 7.392C106.973 6.64533 108.413 6.272 110.013 6.272C111.677 6.272 113.106 6.656 114.301 7.424C115.517 8.192 116.392 9.17333 116.925 10.368V6.528H119.165V24H116.925V20.128C116.37 21.3227 115.485 22.3147 114.269 23.104C113.074 23.872 111.645 24.256 109.981 24.256C108.402 24.256 106.973 23.8827 105.693 23.136C104.434 22.3893 103.442 21.3333 102.717 19.968C102.013 18.6027 101.661 17.024 101.661 15.232ZM116.925 15.264C116.925 13.856 116.637 12.6187 116.061 11.552C115.485 10.4853 114.696 9.664 113.693 9.088C112.712 8.512 111.624 8.224 110.429 8.224C109.192 8.224 108.082 8.50133 107.101 9.056C106.12 9.61067 105.341 10.4213 104.765 11.488C104.21 12.5333 103.933 13.7813 103.933 15.232C103.933 16.6613 104.21 17.92 104.765 19.008C105.341 20.0747 106.12 20.896 107.101 21.472C108.082 22.0267 109.192 22.304 110.429 22.304C111.624 22.304 112.712 22.016 113.693 21.44C114.696 20.864 115.485 20.0427 116.061 18.976C116.637 17.9093 116.925 16.672 116.925 15.264ZM126.519 9.632C127.009 8.544 127.756 7.70133 128.759 7.104C129.783 6.50667 131.031 6.208 132.503 6.208V8.544H131.895C130.273 8.544 128.972 8.98133 127.991 9.856C127.009 10.7307 126.519 12.192 126.519 14.24V24H124.279V6.528H126.519V9.632ZM138.785 8.416V19.264C138.785 20.3307 138.987 21.0667 139.393 21.472C139.798 21.8773 140.513 22.08 141.536 22.08H143.585V24H141.185C139.606 24 138.433 23.6373 137.665 22.912C136.897 22.1653 136.513 20.9493 136.513 19.264V8.416H134.081V6.528H136.513V2.144H138.785V6.528H143.585V8.416H138.785Z" fill="black" />
                        </svg>
                    </Link>

                </div>
                <div>
                    <button className="signIn__btn flex items-center gap-2 active:text-orange-400"><span className="signIn__icon"><FaUserCircle /></span>Sign In</button>
                </div>
            </div>
            <div className="flex justify-between h-16 items-center my-3">
                <div>
                    <button className="flex items-center gap-2 active:text-white bg-orange-300 rounded px-3 py-2"><span className="signIn__icon"><IoLocationOutline /></span>Dhaka, 1212</button>
                </div>
                <div className="lg:w-1/4 sm:w-1/2  relative flex items-center">
                    <input className="w-full h-10 rounded-lg bg-slate-50 p-2 border border-slate-400 outline-none"
                        placeholder="search"
                        type="text"
                        value={search}
                        onChange={getSearachTerm}
                        id="simple-search" />
                    <span className="text-xl absolute right-2 text-slate-500"><BsSearch /></span>
                </div>
            </div>
            <nav className="mb-10">
                <ul className="nev__menus lg:justify-between md:gap-3 sm:gap-2 xs:gap-2">
                    <li><Link className="menu__item" to='/'>Fresh</Link></li>
                    <li><Link className="menu__item" to='/about'>Today’s Deals</Link></li>
                    <li><Link className="menu__item" to='/contact'>Mobiles</Link></li>
                    <li><Link className="menu__item" to='/menu'>Gift Cards</Link></li>
                    <li><Link className="menu__item" to='/orders'>Women Clothing</Link></li>
                    <li><Link className="menu__item" to='/orders'>Men Clothing</Link></li>
                    <li><Link className="menu__item" to='/orders'>Kids Clothing</Link></li>
                    <li><Link className="menu__item" to='/orders'>Health</Link></li>
                    <li><Link className="menu__item" to='/orders'>Pet corner</Link></li>
                    <li><Link className="menu__item" to='/orders'>ClothBooksing</Link></li>
                    <li><Link className="menu__item" to='/orders'>Beauty</Link></li>
                    <li><Link className="menu__item" to='/orders'>Kitchen</Link></li>
                    <li><Link className="menu__item" to='/orders'>Bed Room</Link></li>
                    <li><Link className="menu__item" to='/orders'>Sport</Link></li>
                    <li><Link className="menu__item" to='/orders'>Bags</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;