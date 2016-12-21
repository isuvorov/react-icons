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

var MdFilterVintage = function (_React$Component) {
    _inherits(MdFilterVintage, _React$Component);

    function MdFilterVintage() {
        _classCallCheck(this, MdFilterVintage);

        return _possibleConstructorReturn(this, (MdFilterVintage.__proto__ || Object.getPrototypeOf(MdFilterVintage)).apply(this, arguments));
    }

    _createClass(MdFilterVintage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 26.6c3.7 0 6.6-2.9 6.6-6.6s-2.9-6.6-6.6-6.6-6.6 2.9-6.6 6.6 2.9 6.6 6.6 6.6z m-16.2 2.7c0-3.8 2.5-8 6.4-9.3-0.4-0.2-0.9-0.5-1.4-0.7-3.2-1.9-5-5.2-5-8.6 3-1.7 6.8-1.9 10 0 0.5 0.2 1 0.6 1.4 0.9-0.1-0.6-0.2-1.1-0.2-1.6 0-3.7 2-7 5-8.7 3 1.7 5 5 5 8.7 0 0.5-0.1 1-0.2 1.6 0.4-0.3 0.9-0.7 1.4-0.9 3.2-1.9 7-1.7 10 0 0 3.4-1.8 6.7-5 8.6-0.5 0.2-1 0.5-1.4 0.7 0.4 0.2 0.9 0.5 1.4 0.7 3.2 1.9 5 5.2 5 8.6-3 1.7-6.8 1.9-10 0-0.5-0.2-1-0.5-1.4-0.9 0.1 0.6 0.2 1.1 0.2 1.6 0 3.7-2 7-5 8.7-3-1.7-5-5-5-8.7 0-0.5 0.1-1 0.2-1.6-0.4 0.4-0.9 0.7-1.4 0.9-3.2 1.9-7 1.7-10 0z' })
                )
            );
        }
    }]);

    return MdFilterVintage;
}(React.Component);

exports.default = MdFilterVintage;
module.exports = exports['default'];