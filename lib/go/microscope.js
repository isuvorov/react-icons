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

var GoMicroscope = function (_React$Component) {
    _inherits(GoMicroscope, _React$Component);

    function GoMicroscope() {
        _classCallCheck(this, GoMicroscope);

        return _possibleConstructorReturn(this, (GoMicroscope.__proto__ || Object.getPrototypeOf(GoMicroscope)).apply(this, arguments));
    }

    _createClass(GoMicroscope, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.1 35c3.4-0.7 5.9-3.9 5.9-7.5 0-2.3-1-4.3-2.6-5.7 0-0.6 0.1-1.2 0.1-1.8 0-4.1-1.9-7.7-5-10l2.5-2.5v-2.5l2.5-2.5-2.5-2.5-2.5 2.5h-2.5l-10 10-5 2.5v5l2.5 2.5h5l2.5-5 3.8-3.7c2.1 1.3 3.7 3.5 3.7 6.2-4.1 0-7.5 3.4-7.5 7.5h-15v2.5h7.5c0.7 0.6 1.6 0.9 2.5 1.3v3.7h-5l-5 5h30l-5-5h-0.9z m-4.1-7.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5z' })
                )
            );
        }
    }]);

    return GoMicroscope;
}(React.Component);

exports.default = GoMicroscope;
module.exports = exports['default'];