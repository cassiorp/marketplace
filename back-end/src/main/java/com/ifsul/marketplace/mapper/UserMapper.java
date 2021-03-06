package com.ifsul.marketplace.mapper;

import com.ifsul.marketplace.dto.user.request.UserCreateDTO;
import com.ifsul.marketplace.dto.user.request.UserUpdateDTO;
import com.ifsul.marketplace.dto.user.response.UserResponseDTO;
import com.ifsul.marketplace.entity.UserEntity;

import static java.util.Optional.ofNullable;

public class UserMapper {

    public static UserEntity toEntity(UserCreateDTO userCreateDTO) {
        return UserEntity.builder()
                .name(userCreateDTO.getName())
                .email(userCreateDTO.getEmail())
                .password(userCreateDTO.getPassword())
                .build();
    }

    public static UserEntity toEntity(UserUpdateDTO userUpdateDTO, UserEntity userEntity) {
        return UserEntity.builder()
                .id(userEntity.getId())
                .name(ofNullable(userUpdateDTO.getName()).orElse(userEntity.getName()))
                .email(ofNullable(userUpdateDTO.getEmail()).orElse(userEntity.getEmail()))
                .password(ofNullable(userUpdateDTO.getPassword()).orElse(userEntity.getPassword()))
                .build();
    }

    public static UserResponseDTO toResponse(UserEntity userEntity) {
        return UserResponseDTO.builder()
                .id(userEntity.getId())
                .name(userEntity.getName())
                .email(userEntity.getEmail())
                .password(userEntity.getPassword())
                .build();
    }
}
