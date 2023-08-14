package com.planty.db.repository;

import com.planty.db.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface EmergencyLogRepository extends JpaRepository<EmergencyLog, Long> {
    Optional<EmergencyLog> findByEid(Long eid);
    List<EmergencyLog> findByGid(GmInfo gid);
    List<EmergencyLog> findByUid(UserInfo uid);
    List<EmergencyLog> findByConnectionNotNullAndGidIsNull();
}