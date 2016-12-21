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

var MdStarOutline = function (_React$Component) {
    _inherits(MdStarOutline, _React$Component);

    function MdStarOutline() {
        _classCallCheck(this, MdStarOutline);

        return _possibleConstructorReturn(this, (MdStarOutline.__proto__ || Object.getPrototypeOf(MdStarOutline)).apply(this, arguments));
    }

    _createClass(MdStarOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 25.7l6.3 3.8-1.7-7.2 5.6-4.8-7.4-0.6-2.8-6.7-2.8 6.7-7.4 0.6 5.6 4.8-1.6 7.2z m16.6-10.3l-9 7.9 2.7 11.7-10.3-6.2-10.3 6.2 2.7-11.7-9-7.9 11.9-1 4.7-11 4.7 11z' })
                )
            );
        }
    }]);

    return MdStarOutline;
}(React.Component);

exports.default = MdStarOutline;
module.exports = exports['default'];