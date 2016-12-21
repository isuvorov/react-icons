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

var TiSocialInstagram = function (_React$Component) {
    _inherits(TiSocialInstagram, _React$Component);

    function TiSocialInstagram() {
        _classCallCheck(this, TiSocialInstagram);

        return _possibleConstructorReturn(this, (TiSocialInstagram.__proto__ || Object.getPrototypeOf(TiSocialInstagram)).apply(this, arguments));
    }

    _createClass(TiSocialInstagram, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 5h-20c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-20c0-2.8-2.2-5-5-5z m-10 10c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z m6.3-3.3c0-1.2 1-2 2-2s2 1 2 2-0.8 2-2 2-2-0.9-2-2z m3.7 20h-20c-1 0-1.7-0.7-1.7-1.7v-10h3.4c0 4.7 3.6 8.3 8.3 8.3s8.3-3.6 8.3-8.3h3.4v10c0 1-0.7 1.7-1.7 1.7z' })
                )
            );
        }
    }]);

    return TiSocialInstagram;
}(React.Component);

exports.default = TiSocialInstagram;
module.exports = exports['default'];