import { z } from "zod";

// const locationSchema = z.object({
//   message: z.string(),
//   // responseData: {
//   //   "info": {/'
//   //     "total": z.number(),
//   //     "pages": z.number()
//   //   },
//   //   "results": [
//   //     // This should contain an array of product objects, but it's not clear from the provided snippet.
//   //     // Please provide more information if needed.
//   //   ]
//   // },
//   // "status": "success",
//   // "timeStamp": "2024-02-13 15:03:53",
//   // "violations": null
// });
// const { z } = require("zod");

const ProductImageSchema = z.array(z.string());

const QuestionAnswerSchema = z.array(
  z.object({
    question: z.string(),
    answer: z.string(),
  })
);

const AddressSchema = z.object({
  address_id: z.string(),
  address: z.string(),
  city: z.string(),
  postal_code: z.string(),
  address_type: z.string(),
  latitude: z.string(),
  longitude: z.string(),
});

const ProductSchema = z.object({
  product_images: ProductImageSchema,
  defected_images: ProductImageSchema,
  description: z.string(),
  answer_to_questions: z.string(),
  answer_to_questions_ar: z.string(),
  answer_to_questions_migration: z.string(),
  answer_to_questions_ar_migration: z.string(),
  unansweredquestions: z.string(),
  grade: z.string(),
  grade_ar: z.string(),
  score: z.number(),
  previous_grade: z.string(),
  previous_score: z.number(),
  bidding: z.array(z.unknown()),
  save_as_draft_step: z.string(),
  current_bid_price: z.number(),
  favourited_by: z.array(z.unknown()),
  status: z.string(),
  sell_status: z.string(),
  questionnaire_migration_status: z.string(),
  isApproved: z.boolean(),
  isExpired: z.boolean(),
  isFraudDetected: z.boolean(),
  verified_date: z.nullable(z.string()),
  isListedBefore: z.boolean(),
  highlights: z.array(z.unknown()),
  attributes: z.array(z.unknown()),
  highlightsAdded: z.string(),
  isReported: z.boolean(),
  reportedBy: z.array(z.unknown()),
  isVerifiedByAdmin: z.boolean(),
  isPriceUpdating: z.boolean(),
  variant_attributes_selections: z.array(z.unknown()),
  isBiddingProduct: z.boolean(),
  trade_in: z.boolean(),
  trade_in_status: z.string(),
  listingSource: z.string(),
  _id: z.string(),
  user_id: z.string(),
  category_id: z.string(),
  brand_id: z.string(),
  model_id: z.string(),
  varient: z.string(),
  varient_ar: z.string(),
  body_cracks: z.string(),
  sell_price: z.number(),
  bid_price: z.number(),
  pick_up_address: AddressSchema,
  createdDate: z.string(),
  updatedDate: z.string(),
  __v: z.number(),
  expiryDate: z.string(),
  code: z.string(),
  varient_id: z.string(),
  response: z.string(),
  model_migration_source: z.string(),
  model_variant_map_id: z.string(),
  variant_migration_source: z.string(),
  rejected_reasons: z.nullable(z.string()),
  rejected_timestamp: z.nullable(z.string()),
  image_updated: z.string(),
  verifiedByAdminDate: z.string(),
  category: z.object({
    _id: z.string(),
    category_name_ar: z.string(),
    active: z.boolean(),
  }),
  brand: z.object({
    _id: z.string(),
    brand_name_ar: z.string(),
  }),
  model: z.object({
    _id: z.string(),
    model_name_ar: z.string(),
  }),
  variant: z.array(
    z.object({
      _id: z.string(),
    })
  ),
  id: z.string(),
});

export const ResponseDataSchema = z.object({
  info: z.object({
    total: z.number(),
    pages: z.number(),
  }),
  results: z.array(ProductSchema),
});

export const ApiResponseSchema = z.object({
  message: z.string(),
  responseData: ResponseDataSchema,
  status: z.string(),
  timeStamp: z.string(),
  violations: z.nullable(z.unknown()),
});

// Example usage:
// const data = {
//   // your JSON data here
// };

// const parsedData = ApiResponseSchema.parse(data);
// console.log(parsedData);
