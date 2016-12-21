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

var MdFormatShapes = function (_React$Component) {
    _inherits(MdFormatShapes, _React$Component);

    function MdFormatShapes() {
        _classCallCheck(this, MdFormatShapes);

        return _possibleConstructorReturn(this, (MdFormatShapes.__proto__ || Object.getPrototypeOf(MdFormatShapes)).apply(this, arguments));
    }

    _createClass(MdFormatShapes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.8 21.3h4.4l-2.2-6.5z m5.1 2.1h-5.9l-1.1 3.2h-2.8l5.7-15h2.4l5.6 15h-2.7z m8.7-15h3.4v-3.4h-3.4v3.4z m3.4 26.6v-3.4h-3.4v3.4h3.4z m-6.6-3.4v-3.2h3.2v-16.8h-3.2v-3.2h-16.8v3.2h-3.2v16.8h3.2v3.2h16.8z m-20 3.4v-3.4h-3.4v3.4h3.4z m-3.4-30v3.4h3.4v-3.4h-3.4z m33.4 6.6h-3.4v16.8h3.4v10h-10v-3.4h-16.8v3.4h-10v-10h3.4v-16.8h-3.4v-10h10v3.4h16.8v-3.4h10v10z' })
                )
            );
        }
    }]);

    return MdFormatShapes;
}(React.Component);

exports.default = MdFormatShapes;
module.exports = exports['default'];