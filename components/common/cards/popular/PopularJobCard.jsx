import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image  
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://static.vecteezy.com/system/resources/previews/023/520/607/original/3d-cv-resume-for-job-search-icon-on-transparent-interview-document-on-clipboard-magnifying-glass-personal-profile-icon-for-worker-hr-search-human-resources-concept-cartoon-smooth-3d-rendering-png.png' }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{ item.employer_name }</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{ item.job_title }</Text>
        <Text style={styles.location}>{ item.job_country }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard