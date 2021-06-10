# Bugs

* MapStruct与Lombok结合使用：

  需要在maven的build下添加，且lombok需要在mapstruct前：

  ```xml
  <build>
          <plugins>
              <plugin>
                  <!--Others-->
              </plugin>
              <plugin>
                  <groupId>org.apache.maven.plugins</groupId>
                  <artifactId>maven-compiler-plugin</artifactId>
                  <version>3.8.1</version>
                  <configuration>
                      <source>${java.version}</source> <!-- depending on your project -->
                      <target>${java.version}</target> <!-- depending on your project -->
                      <annotationProcessorPaths>
                          <!--lombok need before the mapstruct-->
                          <path>
                              <groupId>org.projectlombok</groupId>
                              <artifactId>lombok</artifactId>
                              <version>1.18.20</version>
                          </path>
                          <path>
                              <groupId>org.mapstruct</groupId>
                              <artifactId>mapstruct-processor</artifactId>
                              <version>${org.mapstruct.version}</version>
                          </path>
                      </annotationProcessorPaths>
                  </configuration>
              </plugin>
          </plugins>
      </build>
  ```

  

