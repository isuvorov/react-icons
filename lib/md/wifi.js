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

var MdWifi = function (_React$Component) {
    _inherits(MdWifi, _React$Component);

    function MdWifi() {
        _classCallCheck(this, MdWifi);

        return _possibleConstructorReturn(this, (MdWifi.__proto__ || Object.getPrototypeOf(MdWifi)).apply(this, arguments));
    }

    _createClass(MdWifi, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.4 21.6c6.4-6.4 16.8-6.4 23.2 0l-3.2 3.4c-4.7-4.6-12.2-4.6-16.8 0z m6.6 6.8c2.7-2.8 7.3-2.8 10 0l-5 5z m-13.4-13.4c10.2-10.1 26.7-10.1 36.8 0l-3.4 3.4c-8.3-8.3-21.7-8.3-30 0z' })
                )
            );
        }
    }]);

    return MdWifi;
}(React.Component);

exports.default = MdWifi;
module.exports = exports['default'];