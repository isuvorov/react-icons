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

var MdOfflinePin = function (_React$Component) {
    _inherits(MdOfflinePin, _React$Component);

    function MdOfflinePin() {
        _classCallCheck(this, MdOfflinePin);

        return _possibleConstructorReturn(this, (MdOfflinePin.__proto__ || Object.getPrototypeOf(MdOfflinePin)).apply(this, arguments));
    }

    _createClass(MdOfflinePin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.2 23.4l11.2-11.2-2.4-2.4-8.8 8.9-3.2-3.2-2.4 2.3z m11.2 6.6v-3.4h-16.8v3.4h16.8z m-8.4-26.6c9.1 0 16.6 7.5 16.6 16.6s-7.5 16.6-16.6 16.6-16.6-7.5-16.6-16.6 7.5-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdOfflinePin;
}(React.Component);

exports.default = MdOfflinePin;
module.exports = exports['default'];