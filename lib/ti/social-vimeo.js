'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiSocialVimeo = function (_React$Component) {
    _inherits(TiSocialVimeo, _React$Component);

    function TiSocialVimeo() {
        _classCallCheck(this, TiSocialVimeo);

        return _possibleConstructorReturn(this, (TiSocialVimeo.__proto__ || Object.getPrototypeOf(TiSocialVimeo)).apply(this, arguments));
    }

    _createClass(TiSocialVimeo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.5 14.6c-0.5 3.2-2 6.3-4.4 9.2-2.4 2.8-4.5 4.9-6.3 6.1-1.2 0.6-2.2 0.6-3 0.1-0.8-0.5-1.5-1.3-2-2.2-0.2-0.6-0.9-2.6-2-6.2-1-3.6-1.7-5.6-1.9-5.8-0.1-0.3-0.5-0.4-1-0.1-0.6 0.2-0.9 0.3-1.1 0.5-0.2 0.1-0.4 0.2-0.5 0.4l-1-1.3 1.1-1.2c0.7-0.8 1.7-1.7 2.8-2.6 1.2-0.8 2.2-1.4 3.1-1.6 0.6-0.1 1.1 0 1.6 0.3 0.4 0.3 0.7 0.8 1 1.5 0.3 0.6 0.5 1.3 0.6 1.9 0.1 0.7 0.3 1.5 0.4 2.4 0.1 0.9 0.3 1.5 0.4 2 0.8 3.2 1.4 4.8 1.9 4.8 0.7 0 1.7-1.4 3.3-4.3 0.6-1.3 0.7-2.4 0.1-3.2-0.7-0.9-1.6-0.9-2.9-0.1 0.2-1.3 0.8-2.4 1.7-3.3 1.7-1.9 3.6-2.6 5.7-2.1 2.1 0.4 2.9 2 2.4 4.8z' })
                )
            );
        }
    }]);

    return TiSocialVimeo;
}(React.Component);

exports.default = TiSocialVimeo;
module.exports = exports['default'];