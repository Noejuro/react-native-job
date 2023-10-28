import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{
            uri: checkImageURL(companyLogo) ? companyLogo : "https://static.vecteezy.com/system/resources/previews/023/520/607/original/3d-cv-resume-for-job-search-icon-on-transparent-interview-document-on-clipboard-magnifying-glass-personal-profile-icon-for-worker-hr-search-human-resources-concept-cartoon-smooth-3d-rendering-png.png"
          }}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{ jobTitle }</Text>
      </View>

      <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{ companyName } /</Text>
          <View style={styles.locationBox}>
            <Image 
              source={icons.location}
              resizeMode='contain'
              style={styles.locationImage}
            />
            <Text style={styles.locationName}>{ location }</Text>
          </View>
      </View>
    </View>
  )
}

export default Company