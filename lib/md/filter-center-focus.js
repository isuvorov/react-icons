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

var MdFilterCenterFocus = function (_React$Component) {
    _inherits(MdFilterCenterFocus, _React$Component);

    function MdFilterCenterFocus() {
        _classCallCheck(this, MdFilterCenterFocus);

        return _possibleConstructorReturn(this, (MdFilterCenterFocus.__proto__ || Object.getPrototypeOf(MdFilterCenterFocus)).apply(this, arguments));
    }

    _createClass(MdFilterCenterFocus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15q2 0 3.5 1.5t1.5 3.5-1.5 3.5-3.5 1.5-3.5-1.5-1.5-3.5 1.5-3.5 3.5-1.5z m11.6 16.6v-6.6h3.4v6.6q0 1.4-1 2.4t-2.4 1h-6.6v-3.4h6.6z m0-26.6q1.4 0 2.4 1t1 2.4v6.6h-3.4v-6.6h-6.6v-3.4h6.6z m-23.2 3.4v6.6h-3.4v-6.6q0-1.4 1-2.4t2.4-1h6.6v3.4h-6.6z m0 16.6v6.6h6.6v3.4h-6.6q-1.4 0-2.4-1t-1-2.4v-6.6h3.4z' })
                )
            );
        }
    }]);

    return MdFilterCenterFocus;
}(React.Component);

exports.default = MdFilterCenterFocus;
module.exports = exports['default'];