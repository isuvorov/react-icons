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

var MdFavoriteBorder = function (_React$Component) {
    _inherits(MdFavoriteBorder, _React$Component);

    function MdFavoriteBorder() {
        _classCallCheck(this, MdFavoriteBorder);

        return _possibleConstructorReturn(this, (MdFavoriteBorder.__proto__ || Object.getPrototypeOf(MdFavoriteBorder)).apply(this, arguments));
    }

    _createClass(MdFavoriteBorder, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 30.9c7.9-7.1 13.2-11.9 13.2-16.8 0-3.3-2.5-5.7-5.9-5.7-2.6 0-5.1 1.6-5.9 3.9h-3.2c-0.8-2.3-3.3-3.9-5.9-3.9-3.4 0-5.9 2.4-5.9 5.7 0 4.9 5.3 9.7 13.2 16.8l0.2 0.2z m7.3-25.9c5.2 0 9.1 4 9.1 9.1 0 6.4-5.6 11.4-14.2 19.3l-2.4 2.1-2.4-2.1c-8.6-7.8-14.2-12.9-14.2-19.3 0-5.1 3.9-9.1 9.1-9.1 2.9 0 5.7 1.4 7.5 3.5 1.8-2.1 4.6-3.5 7.5-3.5z' })
                )
            );
        }
    }]);

    return MdFavoriteBorder;
}(React.Component);

exports.default = MdFavoriteBorder;
module.exports = exports['default'];