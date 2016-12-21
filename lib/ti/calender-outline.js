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

var TiCalenderOutline = function (_React$Component) {
    _inherits(TiCalenderOutline, _React$Component);

    function TiCalenderOutline() {
        _classCallCheck(this, TiCalenderOutline);

        return _possibleConstructorReturn(this, (TiCalenderOutline.__proto__ || Object.getPrototypeOf(TiCalenderOutline)).apply(this, arguments));
    }

    _createClass(TiCalenderOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.7 10.3v-0.3c0-2.8-2.3-5-5-5s-5 2.2-5 5h-3.4c0-2.8-2.2-5-5-5s-5 2.2-5 5v0.3c-1.9 0.7-3.3 2.5-3.3 4.7v15c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5v-15c0-2.2-1.4-4-3.3-4.7z m-6.7-0.3c0-0.9 0.7-1.7 1.7-1.7s1.6 0.8 1.6 1.7v3.3c0 1-0.7 1.7-1.6 1.7s-1.7-0.7-1.7-1.7v-3.3z m-13.3 0c0-0.9 0.7-1.7 1.6-1.7s1.7 0.8 1.7 1.7v3.3c0 1-0.7 1.7-1.7 1.7s-1.6-0.7-1.6-1.7v-3.3z m20 20c0 0.9-0.8 1.7-1.7 1.7h-20c-0.9 0-1.7-0.8-1.7-1.7v-10h23.4v10z m0-11.7h-23.4v-3.3c0-0.9 0.8-1.7 1.7-1.7 0 1.9 1.5 3.4 3.3 3.4s3.4-1.5 3.4-3.4h6.6c0 1.9 1.5 3.4 3.4 3.4s3.3-1.5 3.3-3.4c0.9 0 1.7 0.8 1.7 1.7v3.3z' })
                )
            );
        }
    }]);

    return TiCalenderOutline;
}(React.Component);

exports.default = TiCalenderOutline;
module.exports = exports['default'];