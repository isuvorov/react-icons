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

var IoSocialFoursquare = function (_React$Component) {
    _inherits(IoSocialFoursquare, _React$Component);

    function IoSocialFoursquare() {
        _classCallCheck(this, IoSocialFoursquare);

        return _possibleConstructorReturn(this, (IoSocialFoursquare.__proto__ || Object.getPrototypeOf(IoSocialFoursquare)).apply(this, arguments));
    }

    _createClass(IoSocialFoursquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.5 2.5c2.7 0 3.5 1.6 2.8 4.5-0.7 3.8-3.1 15.7-3.3 16.6-0.2 1-0.6 2.7-3.1 2.7h-5.6c-0.2 0-0.2 0-0.5 0.2-0.1 0.1-8.9 10.4-8.9 10.4-0.7 0.8-1.8 0.6-2.2 0.4s-1.2-0.6-1.2-2v-29.7s0.8-3.1 3.4-3.1h18.6z m-0.5 21.1c0.2-0.9 2.6-12.8 3.3-16.6z m-0.6-16c0.1-0.7-0.4-1.3-1-1.3h-14.9c-0.7 0-1.2 0.7-1.2 1.2v23.1c0 0.1 0.1 0.1 0.2 0 0 0 5.5-6.5 6.1-7.3s0.8-0.9 1.8-0.9h5c0.7 0 1.1-0.6 1.1-0.9s0.7-3.4 0.8-4-0.4-1.2-1-1.2h-6.4c-0.8 0-1.4-0.7-1.4-1.5v-1c0-0.8 0.6-1.3 1.4-1.3h7.5s1.1-0.5 1.2-0.9z' })
                )
            );
        }
    }]);

    return IoSocialFoursquare;
}(React.Component);

exports.default = IoSocialFoursquare;
module.exports = exports['default'];