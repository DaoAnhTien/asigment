import Post from "../../models/Post";
import { DELETE_POST, INSERT_POST, UPDATE_POST } from "../actions/postaction";

const initalstate = {
  postes: [
    new Post(
      "lịch sử",
      "Lịch sử Việt Nam nếu tính từ lúc có mặt con người sinh sống thì đã có hàng vạn năm trước Công nguyên, còn tính từ khi cơ cấu nhà nước được hình thành thì mới khoảng từ năm 700 năm trước công nguyên."
    ),
    new Post(
      "tin tức",
      "hiều 4/3, Bộ Ngoại giao cho biết, trước những diễn biến phức tạp do xung đột vũ trang ở Ukraine, ảnh hưởng tới người dân Việt Nam sinh sống, học tập, làm việc tại đây. Ngày 3/3, trên cơ sở kiến nghị của Bộ Ngoại giao, Chính phủ đã phê duyệt chủ trương tổ chức chuyến bay đưa người Việt có nhu cầu về nước."
    ),
  ],
};
export default (state = initalstate, action) => {
  const { type, posts } = action;
  switch (type) {
    case INSERT_POST:
      return { ...state, postes: [...state.postes, posts] };
    case DELETE_POST:
      const { post } = action;
      const fillteredcategories = state.postes.filter(
        (item) => item.post !== post
      );
      return { ...state, postes: [...fillteredcategories] };
    case UPDATE_POST:
      const filteredcates = state.postes.filter(
        (item) => item.post !== posts.post
      );
      return { ...state, postes: [...filteredcates, posts] };

    default:
      return state;
  }
};
