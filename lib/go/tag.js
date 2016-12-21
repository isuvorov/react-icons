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

var GoTag = function (_React$Component) {
    _inherits(GoTag, _React$Component);

    function GoTag() {
        _classCallCheck(this, GoTag);

        return _possibleConstructorReturn(this, (GoTag.__proto__ || Object.getPrototypeOf(GoTag)).apply(this, arguments));
    }

    _createClass(GoTag, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5h-10l-5 5v10l20 20 15-15-20-20z m-12.5 13.8v-7.5l3.8-3.8h7.5l17.5 17.5-11.3 11.3-17.5-17.5z m15-3.8l-7.5 7.5 10 10 7.5-7.5-10-10z m-3.7 7.5l3.7-3.7 6.3 6.2-3.8 3.8-6.2-6.3z m-1.3-8.7c0-2.1-1.7-3.8-3.7-3.8s-3.8 1.7-3.8 3.8 1.7 3.7 3.8 3.7 3.7-1.7 3.7-3.7z m-3.7 1.2c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.3 1.3-1.3 1.2 0.6 1.2 1.3-0.6 1.2-1.2 1.2z' })
                )
            );
        }
    }]);

    return GoTag;
}(React.Component);

exports.default = GoTag;
module.exports = exports['default'];