import ImageFile from "./ImageFile";

class DirectoryDetails {
    Guid: string;
    DirectoryName: string;
    Directories: DirectoryDetails[];
    Files: ImageFile[]
}
export default DirectoryDetails;