export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Locale: { input: any; output: any };
  _DateTime: { input: any; output: any };
};

export type ApplePodcast = {
  __typename?: "ApplePodcast";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** Single Article. */
export type Article = Model & {
  __typename?: "Article";
  /** Count of bookmark events. */
  _bookmarks: Scalars["Int"]["output"];
  /** The time the content item was changed. */
  _changed_on: Scalars["String"]["output"];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars["String"]["output"];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars["String"]["output"];
  /** Count of view events. */
  _event: Scalars["Int"]["output"];
  /** Unique identifier for each content item. */
  _id: Scalars["String"]["output"];
  _last_published_on?: Maybe<Scalars["String"]["output"]>;
  /** Count of like events. */
  _likes: Scalars["Int"]["output"];
  _locale: Scalars["String"]["output"];
  _locales: Array<Scalars["String"]["output"]>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Article>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars["String"]["output"]>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars["Int"]["output"]>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars["String"]["output"]>;
  /** Count of subscribe events. */
  _subscribes: Scalars["Int"]["output"];
  /** Count of view events. */
  _views: Scalars["Int"]["output"];
  article_category: Array<ArticleCategory>;
  article_content?: Maybe<Array<Maybe<_Prepr_Types>>>;
  article_cover?: Maybe<Asset>;
  article_next_articles: Array<Article>;
  article_title?: Maybe<Scalars["String"]["output"]>;
};

/** Single Article. */
export type Article_EventArgs = {
  name?: _Event;
};

/** List of ArticleCategories items. */
export type ArticleCategories = {
  __typename?: "ArticleCategories";
  items: Array<ArticleCategory>;
  total: Scalars["Int"]["output"];
};

/** Single ArticleCategory. */
export type ArticleCategory = Model & {
  __typename?: "ArticleCategory";
  /** Count of bookmark events. */
  _bookmarks: Scalars["Int"]["output"];
  /** The time the content item was changed. */
  _changed_on: Scalars["String"]["output"];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars["String"]["output"];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars["String"]["output"];
  /** Count of view events. */
  _event: Scalars["Int"]["output"];
  /** Unique identifier for each content item. */
  _id: Scalars["String"]["output"];
  _last_published_on?: Maybe<Scalars["String"]["output"]>;
  /** Count of like events. */
  _likes: Scalars["Int"]["output"];
  _locale: Scalars["String"]["output"];
  _locales: Array<Scalars["String"]["output"]>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<ArticleCategory>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars["String"]["output"]>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars["Int"]["output"]>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars["String"]["output"]>;
  /** Count of subscribe events. */
  _subscribes: Scalars["Int"]["output"];
  /** Count of view events. */
  _views: Scalars["Int"]["output"];
  article_category_name?: Maybe<Scalars["String"]["output"]>;
};

/** Single ArticleCategory. */
export type ArticleCategory_EventArgs = {
  name?: _Event;
};

export enum ArticleCategorySortInput {
  ArticleCategoryNameAsc = "article_category_name_ASC",
  ArticleCategoryNameDesc = "article_category_name_DESC",
  ChangedOn = "changed_on",
  ChangedOnAsc = "changed_on_ASC",
  ChangedOnDesc = "changed_on_DESC",
  CreatedOn = "created_on",
  CreatedOnAsc = "created_on_ASC",
  CreatedOnDesc = "created_on_DESC",
  PublishOn = "publish_on",
  PublishOnAsc = "publish_on_ASC",
  PublishOnDesc = "publish_on_DESC",
}

export type ArticleCategoryWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<ArticleCategoryWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the field is equal to the given value. */
  article_category_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  article_category_name_any?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Full fuzzy text search, not case sensitive. */
  article_category_name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  article_category_name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  article_category_name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  article_category_name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ArticleSortInput {
  ArticleTitleAsc = "article_title_ASC",
  ArticleTitleDesc = "article_title_DESC",
  ChangedOn = "changed_on",
  ChangedOnAsc = "changed_on_ASC",
  ChangedOnDesc = "changed_on_DESC",
  CreatedOn = "created_on",
  CreatedOnAsc = "created_on_ASC",
  CreatedOnDesc = "created_on_DESC",
  PublishOn = "publish_on",
  PublishOnAsc = "publish_on_ASC",
  PublishOnDesc = "publish_on_DESC",
}

export type ArticleWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<ArticleWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Match on ArticleCategory fields. */
  article_category?: InputMaybe<ArticleCategoryWhereInput>;
  article_cover?: InputMaybe<AssetsWhereInput>;
  /** Match on Article fields. */
  article_next_articles?: InputMaybe<ArticleWhereInput>;
  /** Matches if the field is equal to the given value. */
  article_title?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  article_title_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Full fuzzy text search, not case sensitive. */
  article_title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  article_title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  article_title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  article_title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** List of Articles items. */
export type Articles = {
  __typename?: "Articles";
  items: Array<Article>;
  total: Scalars["Int"]["output"];
};

/** Prepr Asset system model */
export type Asset = {
  __typename?: "Asset";
  /** Unique identifier for each asset. */
  _id: Scalars["String"]["output"];
  _locale: Scalars["String"]["output"];
  /** This field returns all localizations for this asset. */
  _localizations: Array<Asset>;
  _type: Scalars["String"]["output"];
  /** Contextual field; alignment of the asset when used in a content item. */
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars["String"]["output"]>;
  /** Contextual field; caption of the asset when used in a content item. */
  caption?: Maybe<Scalars["String"]["output"]>;
  /** Returns a cover image for audio/video files. */
  cover?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  file_size: Scalars["Int"]["output"];
  /** The focal point coordinates (x, y) represent percentages of the image dimensions, ranging from 0 to 100. */
  focal_point?: Maybe<_FocalPoint>;
  height?: Maybe<Scalars["Int"]["output"]>;
  mime_type?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  original_name?: Maybe<Scalars["String"]["output"]>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** Prepr Asset system model */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars["Boolean"]["input"]>;
  end?: InputMaybe<Scalars["Float"]["input"]>;
  fit_mode?: InputMaybe<Scalars["String"]["input"]>;
  flip_h?: InputMaybe<Scalars["Boolean"]["input"]>;
  flip_v?: InputMaybe<Scalars["Boolean"]["input"]>;
  fps?: InputMaybe<Scalars["Int"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  rotate?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Float"]["input"]>;
  time?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Prepr Asset system model */
export type AssetUrlArgs = {
  as_file?: InputMaybe<Scalars["Boolean"]["input"]>;
  crop?: InputMaybe<Scalars["String"]["input"]>;
  format?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  inline?: InputMaybe<Scalars["Boolean"]["input"]>;
  preset?: InputMaybe<Scalars["String"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  res?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AssetAlignment {
  Center = "center",
  Left = "left",
  Right = "right",
}

/** Collection of assets used in a content item. */
export type Assets = {
  __typename?: "Assets";
  _type?: Maybe<Scalars["String"]["output"]>;
  items?: Maybe<Array<Maybe<Asset>>>;
};

export type AssetsWhereInput = {
  _id_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlueskyPost = {
  __typename?: "BlueskyPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** A component is a predefined set of fields that can be used in models. You can think of a component as a flexible, reusable template where you define fields once, and then fill them with different content every time you use it. */
export type Component = {
  _context?: Maybe<Context>;
  /** Unique identifier for each content component instance. */
  _id: Scalars["String"]["output"];
};

export type ContentItems = {
  __typename?: "ContentItems";
  items: Array<Model>;
  total: Scalars["Int"]["output"];
};

export enum ContentItemsSortInput {
  ChangedOn = "changed_on",
  ChangedOnDesc = "changed_on_DESC",
  CreatedOn = "created_on",
  CreatedOnDesc = "created_on_DESC",
  /** Sort content items by most viewed. */
  Popular = "popular",
  PublishOn = "publish_on",
  PublishOnDesc = "publish_on_DESC",
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _customer_relation?: InputMaybe<CustomerRelationWhereInput>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _search?: InputMaybe<Scalars["String"]["input"]>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _tags_has?: InputMaybe<Scalars["Boolean"]["input"]>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Context = {
  __typename?: "Context";
  /** The unique identifier for an A/B test or personalization block used for analytics. */
  group_id?: Maybe<Scalars["String"]["output"]>;
  /** Returns the kind of personalized content: `PERSONALIZATION` | `AB_TEST`. */
  kind?: Maybe<Scalars["String"]["output"]>;
  segments?: Maybe<Array<Scalars["String"]["output"]>>;
  /** A variant ID is a unique identifier assigned to each variant in an A/B test (A/B) or personalization and contains the segments it has been linked too. */
  variant_id?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier for an A/B test or personalization variant used for analytics. */
  variant_key?: Maybe<Scalars["String"]["output"]>;
};

/** Represents a geolocation point with latitude and longitude. */
export type Coordinates = {
  __typename?: "Coordinates";
  _id: Scalars["String"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
};

export type CustomerRelationWhereInput = {
  event: _Event;
  id?: InputMaybe<Scalars["String"]["input"]>;
  reference_id?: InputMaybe<Scalars["String"]["input"]>;
};

export type FacebookPost = {
  __typename?: "FacebookPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** Single HomepageProjects. */
export type HomepageProjects = Model & {
  __typename?: "HomepageProjects";
  /** Count of bookmark events. */
  _bookmarks: Scalars["Int"]["output"];
  /** The time the content item was changed. */
  _changed_on: Scalars["String"]["output"];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars["String"]["output"];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars["String"]["output"];
  /** Count of view events. */
  _event: Scalars["Int"]["output"];
  /** Unique identifier for each content item. */
  _id: Scalars["String"]["output"];
  _last_published_on?: Maybe<Scalars["String"]["output"]>;
  /** Count of like events. */
  _likes: Scalars["Int"]["output"];
  _locale: Scalars["String"]["output"];
  _locales: Array<Scalars["String"]["output"]>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<HomepageProjects>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars["String"]["output"]>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars["Int"]["output"]>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars["String"]["output"]>;
  /** Count of subscribe events. */
  _subscribes: Scalars["Int"]["output"];
  /** Count of view events. */
  _views: Scalars["Int"]["output"];
  homepageprojects: Array<Project>;
  prepr_display_name?: Maybe<Scalars["String"]["output"]>;
};

/** Single HomepageProjects. */
export type HomepageProjects_EventArgs = {
  name?: _Event;
};

/** Embedded HubSpot form. */
export type HubSpotEmbed = {
  __typename?: "HubSpotEmbed";
  _id: Scalars["String"]["output"];
  /** HubSpot form ID */
  embed_id: Scalars["String"]["output"];
};

/** ImagesRow component. */
export type ImagesRow = Component & {
  __typename?: "ImagesRow";
  _context?: Maybe<Context>;
  _id: Scalars["String"]["output"];
  image?: Maybe<Array<Maybe<Asset>>>;
};

export type InstagramPost = {
  __typename?: "InstagramPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** A model is the content structure of a content item that is used in multiple locations in your CMS. A model consists of a number of fields to store your content. Common examples of models are articles, landing pages and products. */
export type Model = {
  /** The time the content item was changed. */
  _changed_on: Scalars["String"]["output"];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars["String"]["output"];
  /** Unique identifier for each content item. */
  _id: Scalars["String"]["output"];
  /** The returned locale for this item. */
  _locale: Scalars["String"]["output"];
  /** List of locales this item is available in. */
  _locales: Array<Scalars["String"]["output"]>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars["String"]["output"]>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars["Int"]["output"]>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars["String"]["output"]>;
};

export type NavigationItem = {
  __typename?: "NavigationItem";
  _id: Scalars["String"]["output"];
  body?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

/** Embedded Pipedrive Web Form. */
export type PipedriveEmbed = {
  __typename?: "PipedriveEmbed";
  _id: Scalars["String"]["output"];
  /** Pipedrive Web Form URL */
  url: Scalars["String"]["output"];
};

/** Single Project. */
export type Project = Model & {
  __typename?: "Project";
  /** Count of bookmark events. */
  _bookmarks: Scalars["Int"]["output"];
  /** The time the content item was changed. */
  _changed_on: Scalars["String"]["output"];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars["String"]["output"];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars["String"]["output"];
  /** Count of view events. */
  _event: Scalars["Int"]["output"];
  /** Unique identifier for each content item. */
  _id: Scalars["String"]["output"];
  _last_published_on?: Maybe<Scalars["String"]["output"]>;
  /** Count of like events. */
  _likes: Scalars["Int"]["output"];
  _locale: Scalars["String"]["output"];
  _locales: Array<Scalars["String"]["output"]>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Project>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars["String"]["output"]>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars["Int"]["output"]>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars["String"]["output"]>;
  /** Count of subscribe events. */
  _subscribes: Scalars["Int"]["output"];
  /** Count of view events. */
  _views: Scalars["Int"]["output"];
  is_featured?: Maybe<Scalars["Boolean"]["output"]>;
  next_project: Array<Project>;
  project_body?: Maybe<Array<Maybe<_Prepr_Types>>>;
  project_category: Array<Service>;
  project_client_quote?: Maybe<Scalars["String"]["output"]>;
  project_client_quote_name?: Maybe<Scalars["String"]["output"]>;
  project_cover?: Maybe<Asset>;
  project_description?: Maybe<Scalars["String"]["output"]>;
  project_name?: Maybe<Scalars["String"]["output"]>;
  project_realization?: Maybe<Scalars["String"]["output"]>;
  project_subheader?: Maybe<Scalars["String"]["output"]>;
  project_table: Array<TableRow>;
};

/** Single Project. */
export type Project_EventArgs = {
  name?: _Event;
};

/** Single Project. */
export type ProjectProject_TableArgs = {
  personalize?: Scalars["Boolean"]["input"];
  personalize_for_country?: InputMaybe<Scalars["String"]["input"]>;
  personalize_for_segments?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export enum ProjectSortInput {
  ChangedOn = "changed_on",
  ChangedOnAsc = "changed_on_ASC",
  ChangedOnDesc = "changed_on_DESC",
  CreatedOn = "created_on",
  CreatedOnAsc = "created_on_ASC",
  CreatedOnDesc = "created_on_DESC",
  ProjectClientQuoteAsc = "project_client_quote_ASC",
  ProjectClientQuoteDesc = "project_client_quote_DESC",
  ProjectClientQuoteNameAsc = "project_client_quote_name_ASC",
  ProjectClientQuoteNameDesc = "project_client_quote_name_DESC",
  ProjectDescriptionAsc = "project_description_ASC",
  ProjectDescriptionDesc = "project_description_DESC",
  ProjectNameAsc = "project_name_ASC",
  ProjectNameDesc = "project_name_DESC",
  ProjectRealizationAsc = "project_realization_ASC",
  ProjectRealizationDesc = "project_realization_DESC",
  ProjectSubheaderAsc = "project_subheader_ASC",
  ProjectSubheaderDesc = "project_subheader_DESC",
  PublishOn = "publish_on",
  PublishOnAsc = "publish_on_ASC",
  PublishOnDesc = "publish_on_DESC",
}

export type ProjectWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<ProjectWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the field is equal to the given value. */
  is_featured?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Match on Project fields. */
  next_project?: InputMaybe<ProjectWhereInput>;
  /** Match on Service fields. */
  project_category?: InputMaybe<ServiceWhereInput>;
  /** Matches if the field is equal to the given value. */
  project_client_quote?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  project_client_quote_any?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Full fuzzy text search, not case sensitive. */
  project_client_quote_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  project_client_quote_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field is equal to the given value. */
  project_client_quote_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  project_client_quote_name_any?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Full fuzzy text search, not case sensitive. */
  project_client_quote_name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  project_client_quote_name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_client_quote_name_not_contains?: InputMaybe<
    Scalars["String"]["input"]
  >;
  /** Matches if the field starts with the given value. */
  project_client_quote_name_starts_with?: InputMaybe<
    Scalars["String"]["input"]
  >;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_client_quote_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  project_client_quote_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  project_cover?: InputMaybe<AssetsWhereInput>;
  /** Matches if the field is equal to the given value. */
  project_description?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  project_description_any?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Full fuzzy text search, not case sensitive. */
  project_description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  project_description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  project_description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field is equal to the given value. */
  project_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  project_name_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Full fuzzy text search, not case sensitive. */
  project_name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  project_name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  project_name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field is equal to the given value. */
  project_realization?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  project_realization_any?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Full fuzzy text search, not case sensitive. */
  project_realization_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  project_realization_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_realization_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  project_realization_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field is equal to the given value. */
  project_subheader?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  project_subheader_any?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Full fuzzy text search, not case sensitive. */
  project_subheader_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  project_subheader_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_subheader_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  project_subheader_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** List of Projects items. */
export type Projects = {
  __typename?: "Projects";
  items: Array<Project>;
  total: Scalars["Int"]["output"];
};

export type Query = {
  __typename?: "Query";
  /** Retrieve a single Article. */
  Article?: Maybe<Article>;
  /** Retrieve multiple ArticleCategories. */
  ArticleCategories?: Maybe<ArticleCategories>;
  /** Retrieve a single ArticleCategory. */
  ArticleCategory?: Maybe<ArticleCategory>;
  /** Retrieve multiple Articles. */
  Articles?: Maybe<Articles>;
  /** Retrieve items from different model types at once. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve HomepageProjects. */
  HomepageProjects?: Maybe<HomepageProjects>;
  /** Recommendation recipe suitable for recommending ArticleCategories which are similar to the giving item */
  PeopleAlsoViewed_ArticleCategories?: Maybe<ArticleCategories>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  PeopleAlsoViewed_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending Projects which are similar to the giving item */
  PeopleAlsoViewed_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending Services which are similar to the giving item */
  PeopleAlsoViewed_Services?: Maybe<Services>;
  /** Recommendation recipe suitable for recommending globally popular ArticleCategories */
  Popular_ArticleCategories?: Maybe<ArticleCategories>;
  /** Recommendation recipe suitable for recommending globally popular Articles */
  Popular_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending globally popular Projects */
  Popular_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending globally popular Services */
  Popular_Services?: Maybe<Services>;
  /** Retrieve a single Project. */
  Project?: Maybe<Project>;
  /** Retrieve multiple Projects. */
  Projects?: Maybe<Projects>;
  /** Retrieve a single Service. */
  Service?: Maybe<Service>;
  /** Retrieve multiple Services. */
  Services?: Maybe<Services>;
  /** Recommendation recipe suitable for recommending ArticleCategories which are similar to the giving item */
  Similar_ArticleCategories?: Maybe<ArticleCategories>;
  /** Recommendation recipe suitable for recommending Articles which are similar to the giving item */
  Similar_Articles?: Maybe<Articles>;
  /** Recommendation recipe suitable for recommending Projects which are similar to the giving item */
  Similar_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending Services which are similar to the giving item */
  Similar_Services?: Maybe<Services>;
  /** Locale that is set as default. */
  _DefaultLocale: Scalars["Locale"]["output"];
  /** Retrieve the list of available locales. */
  _Locales?: Maybe<Array<Scalars["Locale"]["output"]>>;
};

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryArticleCategoriesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<ArticleCategorySortInput>;
  where?: InputMaybe<ArticleCategoryWhereInput>;
};

export type QueryArticleCategoryArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<ArticleSortInput>;
  where?: InputMaybe<ArticleWhereInput>;
};

export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  people_also_viewed_id?: InputMaybe<Scalars["String"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};

export type QueryHomepageProjectsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryPeopleAlsoViewed_ArticleCategoriesArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArticleCategoryWhereInput>;
};

export type QueryPeopleAlsoViewed_ArticlesArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArticleWhereInput>;
};

export type QueryPeopleAlsoViewed_ProjectsArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryPeopleAlsoViewed_ServicesArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceWhereInput>;
};

export type QueryPopular_ArticleCategoriesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArticleCategoryWhereInput>;
};

export type QueryPopular_ArticlesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArticleWhereInput>;
};

export type QueryPopular_ProjectsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryPopular_ServicesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceWhereInput>;
};

export type QueryProjectArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<ProjectSortInput>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryServiceArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryServicesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: Scalars["String"]["input"];
  locales?: InputMaybe<Array<Scalars["String"]["input"]>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<ServiceSortInput>;
  where?: InputMaybe<ServiceWhereInput>;
};

export type QuerySimilar_ArticleCategoriesArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArticleCategoryWhereInput>;
};

export type QuerySimilar_ArticlesArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArticleWhereInput>;
};

export type QuerySimilar_ProjectsArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QuerySimilar_ServicesArgs = {
  id: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  locales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ServiceWhereInput>;
};

export type Quote = {
  __typename?: "Quote";
  _id: Scalars["String"]["output"];
  author?: Maybe<Scalars["String"]["output"]>;
  body?: Maybe<Scalars["String"]["output"]>;
};

export type Resource = {
  __typename?: "Resource";
  _id: Scalars["String"]["output"];
  body?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SearchOptionsInput = {
  includeNumeric?: InputMaybe<Scalars["Boolean"]["input"]>;
  includeReferences?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Single Service. */
export type Service = Model & {
  __typename?: "Service";
  /** Count of bookmark events. */
  _bookmarks: Scalars["Int"]["output"];
  /** The time the content item was changed. */
  _changed_on: Scalars["String"]["output"];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars["String"]["output"];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars["String"]["output"];
  /** Count of view events. */
  _event: Scalars["Int"]["output"];
  /** Unique identifier for each content item. */
  _id: Scalars["String"]["output"];
  _last_published_on?: Maybe<Scalars["String"]["output"]>;
  /** Count of like events. */
  _likes: Scalars["Int"]["output"];
  _locale: Scalars["String"]["output"];
  _locales: Array<Scalars["String"]["output"]>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Service>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars["String"]["output"]>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars["Int"]["output"]>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars["String"]["output"]>;
  /** Count of subscribe events. */
  _subscribes: Scalars["Int"]["output"];
  /** Count of view events. */
  _views: Scalars["Int"]["output"];
  service_name?: Maybe<Scalars["String"]["output"]>;
};

/** Single Service. */
export type Service_EventArgs = {
  name?: _Event;
};

export enum ServiceSortInput {
  ChangedOn = "changed_on",
  ChangedOnAsc = "changed_on_ASC",
  ChangedOnDesc = "changed_on_DESC",
  CreatedOn = "created_on",
  CreatedOnAsc = "created_on_ASC",
  CreatedOnDesc = "created_on_DESC",
  PublishOn = "publish_on",
  PublishOnAsc = "publish_on_ASC",
  PublishOnDesc = "publish_on_DESC",
  ServiceNameAsc = "service_name_ASC",
  ServiceNameDesc = "service_name_DESC",
}

export type ServiceWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _changed_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _created_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the Id, Slug, Created On, Changed On, Published On, Text, Integer, Float, Boolean, and DateTime field types, for references only Text, Integer, Float, Boolean and exists (at least one item) fields are supported. */
  _or?: InputMaybe<Array<ServiceWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_gte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lt?: InputMaybe<Scalars["_DateTime"]["input"]>;
  _publish_on_lte?: InputMaybe<Scalars["_DateTime"]["input"]>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Matches if the field is equal to the given value. */
  service_name?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field matches any of the given values. */
  service_name_any?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Full fuzzy text search, not case sensitive. */
  service_name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field ends with the given value. */
  service_name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  service_name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches if the field starts with the given value. */
  service_name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

/** List of Services items. */
export type Services = {
  __typename?: "Services";
  items: Array<Service>;
  total: Scalars["Int"]["output"];
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars["Float"]["input"]>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars["Float"]["input"]>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SoundCloudPost = {
  __typename?: "SoundCloudPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type SpotifyPlaylist = {
  __typename?: "SpotifyPlaylist";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** TableRow component. */
export type TableRow = Component & {
  __typename?: "TableRow";
  _context?: Maybe<Context>;
  _id: Scalars["String"]["output"];
  table_body?: Maybe<Scalars["String"]["output"]>;
  table_header?: Maybe<Scalars["String"]["output"]>;
};

export type Text = {
  __typename?: "Text";
  _id: Scalars["String"]["output"];
  body?: Maybe<Scalars["String"]["output"]>;
  format?: Maybe<TextFormat>;
  html?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export enum TextFormat {
  Code = "Code",
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
  Html = "HTML",
}

export type ThreadsPost = {
  __typename?: "ThreadsPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type TikTokPost = {
  __typename?: "TikTokPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type TwitterPost = {
  __typename?: "TwitterPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** Embedded Typeform form. */
export type TypeformEmbed = {
  __typename?: "TypeformEmbed";
  _id: Scalars["String"]["output"];
  /** Typeform form ID */
  embed_id: Scalars["String"]["output"];
};

export type VimeoPost = {
  __typename?: "VimeoPost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type YouTubePost = {
  __typename?: "YouTubePost";
  _id: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = "Bookmark",
  Clickthrough = "Clickthrough",
  Comment = "Comment",
  Like = "Like",
  Purchase = "Purchase",
  Share = "Share",
  Subscribe = "Subscribe",
  View = "View",
  Vote = "Vote",
}

export type _FocalPoint = {
  __typename?: "_FocalPoint";
  x: Scalars["Int"]["output"];
  y: Scalars["Int"]["output"];
};

/** This union type contains all components and remote sources. */
export type _Prepr_Types =
  | ApplePodcast
  | Assets
  | BlueskyPost
  | Coordinates
  | FacebookPost
  | HubSpotEmbed
  | ImagesRow
  | InstagramPost
  | NavigationItem
  | PipedriveEmbed
  | Quote
  | Resource
  | SoundCloudPost
  | SpotifyPlaylist
  | TableRow
  | Text
  | ThreadsPost
  | TikTokPost
  | TwitterPost
  | TypeformEmbed
  | VimeoPost
  | YouTubePost;
