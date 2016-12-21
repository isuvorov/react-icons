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

var MdPageview = function (_React$Component) {
    _inherits(MdPageview, _React$Component);

    function MdPageview() {
        _classCallCheck(this, MdPageview);

        return _possibleConstructorReturn(this, (MdPageview.__proto__ || Object.getPrototypeOf(MdPageview)).apply(this, arguments));
    }

    _createClass(MdPageview, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28 30.3l2.3-2.3-4.8-4.9c0.7-1.1 1.1-2.5 1.1-4 0-4.1-3.3-7.5-7.5-7.5s-7.5 3.4-7.5 7.5 3.4 7.5 7.5 7.5c1.5 0 2.9-0.4 4-1.1z m5.4-23.7c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h26.8z m-14.3 8.4c2.3 0 4.3 1.9 4.3 4.1s-2 4.3-4.3 4.3-4.1-2-4.1-4.3 1.9-4.1 4.1-4.1z' })
                )
            );
        }
    }]);

    return MdPageview;
}(React.Component);

exports.default = MdPageview;
module.exports = exports['default'];