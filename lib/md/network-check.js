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

var MdNetworkCheck = function (_React$Component) {
    _inherits(MdNetworkCheck, _React$Component);

    function MdNetworkCheck() {
        _classCallCheck(this, MdNetworkCheck);

        return _possibleConstructorReturn(this, (MdNetworkCheck.__proto__ || Object.getPrototypeOf(MdNetworkCheck)).apply(this, arguments));
    }

    _createClass(MdNetworkCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.4 21.6c3.3-3.3 7.8-4.9 12.1-4.7l-2.1 4.7c-2.5 0.4-4.9 1.5-6.8 3.4z m20 3.4c-0.7-0.6-1.4-1.2-2.1-1.6l1-4.9c1.5 0.8 3 1.8 4.3 3.1z m6.6-6.6c-2-2.1-4.4-3.6-6.9-4.6l0.9-4.7c3.4 1.2 6.6 3.2 9.4 5.9z m-33.4-3.4c6.3-6.2 14.9-8.6 22.9-7.2l-1.9 4.5c-6.3-0.8-12.8 1.3-17.6 6.1z m24.9-6.6c0.5 0 0.8 0.3 0.8 0.7l-4 21.5v0.1c-0.3 1.5-1.7 2.7-3.3 2.7-1.9 0-3.4-1.5-3.4-3.4 0-0.5 0.2-1.2 0.4-1.6l8.7-19.4c0.1-0.4 0.4-0.6 0.8-0.6z' })
                )
            );
        }
    }]);

    return MdNetworkCheck;
}(React.Component);

exports.default = MdNetworkCheck;
module.exports = exports['default'];