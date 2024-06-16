import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import ProgressBarWithPercent from "../../../component/ProgressBarWithPercent";

export function RecommendShop({ recommendedShopDetail }) {
  const variant = "Light";

  return (
    <div className="position-relative">
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
        이 가게를 총 <b>{recommendedShopDetail.totalCherryPickCount}</b>명이
        체리픽 받았어요!{" "}
        <span className="visually-hidden">totalCherryPickCount</span>
      </span>
      <Card
        style={{ width: "18rem" }}
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        className="mb-2 shadow rounded"
      >
        <CardMedia
          className="pe-0"
          sx={{ height: 140 }}
          image={recommendedShopDetail.shopMainPhotoURLs[0]}
          title="Main image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recommendedShopDetail.shopName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recommendedShopDetail.oneLineReview}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="left-aligned mt-3"
          >
            <b className="cherry-text-primary">주소 </b>
            {recommendedShopDetail.shopAddress}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="mt-3 cherry-text-primary"
          >
            키워드 태그
          </Typography>
          {recommendedShopDetail.topTags.map((tag, index) => {
            return (
              <div key={index}>
                <div className="left-aligned">{tag.description}</div>
                <ProgressBarWithPercent percent={tag.value} />
              </div>
            );
          })}

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="mt-3 cherry-text-primary"
          >
            메뉴
          </Typography>
          {recommendedShopDetail.shopMenus.map((menu, index) => {
            return (
              <div key={index} className="row justify-content-between">
                <div className="col-8 left-aligned">{menu.name}</div>
                <div className="col-4 right-aligned">
                  {menu.price !== null && menu.price !== undefined
                    ? menu.price
                    : "-"}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export default RecommendShop;
