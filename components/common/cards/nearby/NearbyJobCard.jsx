import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate = () => {} }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image  
          source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://static.vecteezy.com/system/resources/previews/023/520/607/original/3d-cv-resume-for-job-search-icon-on-transparent-interview-document-on-clipboard-magnifying-glass-personal-profile-icon-for-worker-hr-search-human-resources-concept-cartoon-smooth-3d-rendering-png.png' }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{ job.job_title }</Text>
        <Text style={styles.jobType}>{ job.job_employment_type }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard