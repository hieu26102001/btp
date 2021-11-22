import styles from '../../styles/Home.module.css'

export default function Footer(){
    return(
    <div className='flex justify-center bg-gray-300 '>
        <div className='block mt-2'>
            <div className="flex list-none justify-center m-0 text-sm ">
                <ul className="flex list-none justify-between m-0 flex-wrap">
                    <li className="px-5">TOÀ SOẠN</li>
                    <li className="px-5">QUẢNG CÁO</li>
                    <li className="px-5">ĐẶT BÁO</li>
                    <li className="px-5">HOTLINE QUẢNG CÁO : 0909.55.99.88</li>
                    <li className="px-5">Email: kinhdoanh@baotienphong.com.vn</li>
                    <button>^</button>
                </ul>
            </div>
            <div className="flex list-none justify-between m-0 text-xs flex-wrap">
                <ul className="mt-10">
                    <li >© Bản quyền thuộc báo điện tử Tiền Phong</li>
                    <li ><b>Tổng Biên tập</b>: LÊ XUÂN SƠN</li>
                    <li>Tòa soạn: 15 Hồ Xuân Hương, Hà Nội - Điện thoại: 024.39431250</li>
                    <li>Email: <span>Hotline: 0865.015.015 - 0977.456.112</span></li>
                </ul>
                <ul className="mt-10">
                    <li>Giấy phép số 76/GP-BTTTT, cấp ngày 26/02/2020.</li>
                    <li>Cơ quan chủ quản: Trung ương Đoàn TNCS Hồ Chí Minh</li>
                    <li>Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản</li>
                    <li>Powered by ePi Technologies</li>
                </ul>
            </div>
        </div>
    </div>
    )
}