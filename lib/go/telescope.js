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

var GoTelescope = function (_React$Component) {
    _inherits(GoTelescope, _React$Component);

    function GoTelescope() {
        _classCallCheck(this, GoTelescope);

        return _possibleConstructorReturn(this, (GoTelescope.__proto__ || Object.getPrototypeOf(GoTelescope)).apply(this, arguments));
    }

    _createClass(GoTelescope, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 16.5c1.2-0.3 8.9-2.3 8.9-2.3 0 0.3-0.1 0.8-0.1 0.8 0 2.7 2 5 5 5s5-2.3 5-5c0-0.5-0.3-0.9-0.7-1.3l1.9 0.1s0.3-0.1 1.2-0.3c-2 0.6-4.2-1.2-4.9-3.9s0.3-5.2 2.3-5.8c-0.9 0.3-1.2 0.3-1.2 0.3l-6.5 4.3c-1.4 0.4-2.2 1.8-1.8 3.2 0 0.3 0.2 0.6 0.4 0.9-0.2 0.4-0.4 1-0.5 1.5-1.1 0-2-0.7-2.4-1.8-0.3-1.3 0.5-2.7 1.8-3l-9.6 2.5c-1.3 0.4-2.1 1.7-1.7 3s1.6 2.1 2.8 1.8z m16.3 6h-5v2.5l-12.5 12.5h5l7.5-5v5h5v-5l7.5 5h5l-12.5-12.5v-2.5z m16.8-17.5c-0.7-2.7-2.7-4.3-4.8-3.7-2.7 0.7-3.8 1-7.2 1.9-2 0.6-3.1 3.2-2.4 5.8s2.9 4.5 4.9 4c3.4-0.9 4.5-1.3 7.2-2 2-0.5 3-3.3 2.3-6z m-2.7 3.5c-0.7 0.2-1.7-0.6-2-2s-0.2-2.6 0.5-2.7 1.6 0.7 2 2 0.1 2.6-0.5 2.7z' })
                )
            );
        }
    }]);

    return GoTelescope;
}(React.Component);

exports.default = GoTelescope;
module.exports = exports['default'];