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

var TiVideo = function (_React$Component) {
    _inherits(TiVideo, _React$Component);

    function TiVideo() {
        _classCallCheck(this, TiVideo);

        return _possibleConstructorReturn(this, (TiVideo.__proto__ || Object.getPrototypeOf(TiVideo)).apply(this, arguments));
    }

    _createClass(TiVideo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 11.9c-0.2-0.1-0.5-0.2-0.8-0.2-0.3 0-0.5 0-0.8 0.1l-4.2 2.2v-0.7c0-2.7-2.3-5-5-5h-18.4c-2.7 0-5 2.3-5 5v13.4c0 2.7 2.3 5 5 5h18.4c2.7 0 5-2.3 5-5v-0.7l4.2 2.2c0.3 0.1 0.5 0.1 0.8 0.1 0.3 0 0.6-0.1 0.8-0.2 0.5-0.3 0.8-0.9 0.8-1.4v-13.4c0-0.5-0.3-1.1-0.8-1.4z m-25.8 10.6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.2 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return TiVideo;
}(React.Component);

exports.default = TiVideo;
module.exports = exports['default'];