import mongoose, { Schema, Document } from 'mongoose';


enum Category {
  Appetizer = 'Appetizer',
  MainCourse = 'Main Course',
  Dessert = 'Dessert',
  Drink = 'Drink',
}

// Interface for nested customizations
interface ICustomization {
  name: string; 
  price: number; 
  maxQuantity: number; 
}

// Main MenuItem interface for type safety
interface IMenuItem extends Document {
  name: string;
  price: number;
  category: Category;
  description?: string;
  ingredients?: string[];
  tags?: string[];
  availability: {
    isAvailable: boolean;
  };
  customizations?: ICustomization[];
  isActive: boolean;
  version: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema
const MenuItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: Object.values(Category),
        message: 'Invalid category',
      },
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    ingredients: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    availability: {
      type: {
        isAvailable: {
          type: Boolean,
          default: true,
        },
      },
      required: true,
    },
    customizations: {
      type: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
            maxlength: [50, 'Customization name cannot exceed 50 characters'],
          },
          price: {
            type: Number,
            required: true,
            min: [0, 'Customization price cannot be negative'],
          },
          maxQuantity: {
            type: Number,
            required: true,
            min: [1, 'Max quantity must be at least 1'],
          },
        },
      ],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    version: {
      type: Number,
      required: true,
      default: 1,
      min: [1, 'Version must be at least 1'],
    },
    imageUrl: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/, 'Invalid image URL'],
    },
  },
  { timestamps: true } // Adds createdAt, updatedAt
);


export const MenuItem = mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);