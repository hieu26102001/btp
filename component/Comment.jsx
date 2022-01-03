export default function Comment() {
    return (
        <div class="flex mt-12 mb-4">
            <div class="w-full bg-white rounded-lg pt-2">
                <div class="flex flex-wrap mb-6">
                    <h2 class="pt-3 pb-2 text-red font-bold text-lg">BÌNH LUẬN</h2>
                    <div class="w-full md:w-full  mb-2 mt-2">
                        <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-32 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Bình luận trước' required></textarea>
                    </div>
                        <div class="mr-2 w-full justify-end flex">
                            <input type='submit' class="bg-white text-red font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Gửi bình luận' />
                        </div>
                </div>
            </div>
        </div>
    )
}
