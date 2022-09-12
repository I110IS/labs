class Markdown
  def initialize(source:, config:)
    @source = source
    @config = config

    define_accessors
  end

  def render
    erb.result(binding)
  end

  private

  def define_accessors
    @config.each do |key, value|
      define_singleton_method(key) { value }
    end
  end

  def template
    @template ||= File.read(@source)
  end

  def erb
    @erb ||= ERB.new(template)
  end
end
