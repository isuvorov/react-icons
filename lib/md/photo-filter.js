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

var MdPhotoFilter = function (_React$Component) {
    _inherits(MdPhotoFilter, _React$Component);

    function MdPhotoFilter() {
        _classCallCheck(this, MdPhotoFilter);

        return _possibleConstructorReturn(this, (MdPhotoFilter.__proto__ || Object.getPrototypeOf(MdPhotoFilter)).apply(this, arguments));
    }

    _createClass(MdPhotoFilter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.1 17.9l4.5 2.1-4.5 2.1-2.1 4.5-2.1-4.5-4.5-2.1 4.5-2.1 2.1-4.5z m6.3-1.3l-1.6-3.4-3.4-1.6 3.4-1.5 1.6-3.5 1.5 3.5 3.5 1.5-3.5 1.6z m3.3 0h3.3v15c0 1.8-1.5 3.4-3.3 3.4h-23.3c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h15v3.4h-15v23.2h23.3v-15z' })
                )
            );
        }
    }]);

    return MdPhotoFilter;
}(React.Component);

exports.default = MdPhotoFilter;
module.exports = exports['default'];