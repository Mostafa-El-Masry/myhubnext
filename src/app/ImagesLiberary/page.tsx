let Assets = [
  `/Assets/jpg (1).jpg`,
  `/Assets/jpg (2).jpg`,
  `/Assets/jpg (3).jpg`,
  `/Assets/jpg (4).jpg`,
  `/Assets/jpg (5).jpg`,
  `/Assets/jpg (6).jpg`,
  `/Assets/jpg (7).jpg`,
  `/Assets/jpg (8).jpg`,
  `/Assets/jpg (9).jpg`,
  `/Assets/jpg (10).jpg`,
  `/Assets/jpg (11).jpg`,
  `/Assets/jpg (12).jpg`,
  `/Assets/jpg (13).jpg`,
  `/Assets/jpg (14).jpg`,
  `/Assets/jpg (15).jpg`,
  `/Assets/jpg (16).jpg`,
  `/Assets/jpg (17).jpg`,
  `/Assets/jpg (18).jpg`,
  `/Assets/jpg (19).jpg`,
  `/Assets/jpg (20).jpg`,
  `/Assets/jpg (21).jpg`,
  `/Assets/jpg (22).jpg`,
  `/Assets/jpg (23).jpg`,
  `/Assets/jpg (24).jpg`,
  `/Assets/jpg (25).jpg`,
  `/Assets/jpg (26).jpg`,
  `/Assets/jpg (27).jpg`,
  `/Assets/jpg (28).jpg`,
  `/Assets/jpg (29).jpg`,
  `/Assets/jpg (30).jpg`,
  `/Assets/jpg (31).jpg`,
  `/Assets/jpg (32).jpg`,
  `/Assets/jpg (33).jpg`,
  `/Assets/jpg (34).jpg`,
  `/Assets/jpg (35).jpg`,
  `/Assets/jpg (36).jpg`,
  `/Assets/jpg (37).jpg`,
  `/Assets/jpg (38).jpg`,
  `/Assets/jpg (39).jpg`,
  `/Assets/jpg (40).jpg`,
  `/Assets/jpg (41).jpg`,
  `/Assets/jpg (42).jpg`,
  `/Assets/jpg (43).jpg`,
  `/Assets/jpg (44).jpg`,
  `/Assets/jpg (45).jpg`,
  `/Assets/jpg (46).jpg`,
  `/Assets/jpg (47).jpg`,
  `/Assets/jpg (48).jpg`,
  `/Assets/jpg (49).jpg`,
  `/Assets/jpg (50).jpg`,
  `/Assets/jpg (51).jpg`,
  `/Assets/jpg (52).jpg`,
  `/Assets/jpg (53).jpg`,
  `/Assets/jpg (54).jpg`,
  `/Assets/jpg (55).jpg`,
  `/Assets/jpg (56).jpg`,
  `/Assets/jpg (57).jpg`,
  `/Assets/jpg (58).jpg`,
  `/Assets/jpg (59).jpg`,
  `/Assets/jpg (60).jpg`,
  `/Assets/jpg (61).jpg`,
  `/Assets/jpg (62).jpg`,
  `/Assets/jpg (63).jpg`,
  `/Assets/jpg (64).jpg`,
  `/Assets/jpg (65).jpg`,
  `/Assets/jpg (66).jpg`,
  `/Assets/jpg (67).jpg`,
  `/Assets/jpg (68).jpg`,
  `/Assets/jpg (69).jpg`,
  `/Assets/jpg (70).jpg`,
  `/Assets/jpg (71).jpg`,
  `/Assets/jpg (72).jpg`,
  `/Assets/jpg (73).jpg`,
  `/Assets/jpg (74).jpg`,
  `/Assets/jpg (75).jpg`,
  `/Assets/jpg (76).jpg`,
  `/Assets/jpg (77).jpg`,
  `/Assets/jpg (78).jpg`,
  `/Assets/jpg (79).jpg`,
  `/Assets/jpg (80).jpg`,
  `/Assets/jpg (81).jpg`,
  `/Assets/jpg (82).jpg`,
  `/Assets/jpg (83).jpg`,
  `/Assets/jpg (84).jpg`,
  `/Assets/jpg (85).jpg`,
  `/Assets/jpg (86).jpg`,
  `/Assets/jpg (87).jpg`,
  `/Assets/jpg (88).jpg`,
  `/Assets/jpg (89).jpg`,
  `/Assets/jpg (90).jpg`,
  `/Assets/jpg (91).jpg`,
  `/Assets/jpg (92).jpg`,
  `/Assets/jpg (93).jpg`,
  `/Assets/jpg (94).jpg`,
  `/Assets/jpg (95).jpg`,
  `/Assets/jpg (96).jpg`,
  `/Assets/jpg (97).jpg`,
  `/Assets/jpg (98).jpg`,
  `/Assets/jpg (99).jpg`,
  `/Assets/jpg (100).jpg`,
  `/Assets/jpg (101).jpg`,
  `/Assets/jpg (102).jpg`,
  `/Assets/jpg (103).jpg`,
  `/Assets/jpg (104).jpg`,
  `/Assets/jpg (105).jpg`,
  `/Assets/jpg (106).jpg`,
  `/Assets/jpg (107).jpg`,
  `/Assets/jpg (108).jpg`,
  `/Assets/jpg (109).jpg`,
  `/Assets/jpg (110).jpg`,
  `/Assets/jpg (111).jpg`,
  `/Assets/jpg (112).jpg`,
  `/Assets/jpg (113).jpg`,
  `/Assets/jpg (114).jpg`,
  `/Assets/jpg (115).jpg`,
  `/Assets/jpg (116).jpg`,
  `/Assets/jpg (117).jpg`,
  `/Assets/jpg (118).jpg`,
  `/Assets/jpg (119).jpg`,
  `/Assets/jpg (120).jpg`,
  `/Assets/jpg (121).jpg`,
  `/Assets/jpg (122).jpg`,
  `/Assets/jpg (123).jpg`,
  `/Assets/jpg (124).jpg`,
  `/Assets/jpg (125).jpg`,
  `/Assets/jpg (126).jpg`,
  `/Assets/jpg (127).jpg`,
  `/Assets/jpg (128).jpg`,
  `/Assets/jpg (129).jpg`,
  `/Assets/jpg (130).jpg`,
  `/Assets/jpg (131).jpg`,
  `/Assets/jpg (132).jpg`,
  `/Assets/jpg (133).jpg`,
  `/Assets/jpg (134).jpg`,
  `/Assets/jpg (135).jpg`,
  `/Assets/jpg (136).jpg`,
  `/Assets/jpg (137).jpg`,
  `/Assets/jpg (138).jpg`,
  `/Assets/jpg (139).jpg`,
  `/Assets/jpg (140).jpg`,
  `/Assets/jpg (141).jpg`,
  `/Assets/jpg (142).jpg`,
  `/Assets/jpg (143).jpg`,
  `/Assets/jpg (144).jpg`,
  `/Assets/jpg (145).jpg`,
  `/Assets/jpg (146).jpg`,
  `/Assets/jpg (147).jpg`,
  `/Assets/jpg (148).jpg`,
  `/Assets/jpg (149).jpg`,
  `/Assets/jpg (150).jpg`,
  `/Assets/jpg (151).jpg`,
  `/Assets/jpg (152).jpg`,
  `/Assets/jpg (153).jpg`,
  `/Assets/jpg (154).jpg`,
  `/Assets/jpg (155).jpg`,
  `/Assets/jpg (156).jpg`,
  `/Assets/jpg (157).jpg`,
  `/Assets/jpg (158).jpg`,
  `/Assets/jpg (159).jpg`,
  `/Assets/jpg (160).jpg`,
  `/Assets/jpg (161).jpg`,
  `/Assets/jpg (162).jpg`,
  `/Assets/gif (3).gif`,
  `/Assets/gif (6).gif`,
  `/Assets/gif (7).gif`,
];

import Image from "next/image";
import Link from "next/link";
import Assestss from "@/app/Assets/jpg (1).jpg";



const ImagesLiberary = () => {
  return (
    <>
      <div>
        <div className="h-full">
          <div
            className="imggallery mt-5 justify-around m-auto py-2"
            id="gallery"
          >
            {/* // Dynamically create image elements and append them to the
            imgGallery */}
            
            {Assets.map((Asset) => (
              <div key={Asset} className="flex max-w-lg rounded-lg">
                <Link target="_blank" href={Asset}>
                  <Image
                    src={Asset}
                    width="200" height="200"
                    className="rounded-lg box-border"
                    alt=""
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesLiberary;
