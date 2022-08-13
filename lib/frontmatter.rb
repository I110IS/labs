class Frontmatter
  attr_reader :config

  def initialize(path)
    @path = path
    @config = YAML.load(yaml).transform_keys(&:to_sym)
  end

  # Deletes the frontmatter section from the markdown file
  def delete
    File.open(@path, "w") do |file|
      file.write(content.split("---")[2])
    end
  end

  private

  def content
    @content ||= File.read(@path)
  end

  def yaml
    return "{}" unless content.start_with?("---")

    @yaml ||= content.split("---")[1]
  end
end
