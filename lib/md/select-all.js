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

var MdSelectAll = function (_React$Component) {
    _inherits(MdSelectAll, _React$Component);

    function MdSelectAll() {
        _classCallCheck(this, MdSelectAll);

        return _possibleConstructorReturn(this, (MdSelectAll.__proto__ || Object.getPrototypeOf(MdSelectAll)).apply(this, arguments));
    }

    _createClass(MdSelectAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 15v10h10v-10h-10z m-3.4 13.4v-16.8h16.8v16.8h-16.8z m13.4-20v-3.4h3.4v3.4h-3.4z m0 26.6v-3.4h3.4v3.4h-3.4z m6.6-6.6v-3.4h3.4v3.4h-3.4z m0-13.4v-3.4h3.4v3.4h-3.4z m0 20v-3.4h3.4c0 1.8-1.6 3.4-3.4 3.4z m0-13.4v-3.2h3.4v3.2h-3.4z m-13.2 13.4v-3.4h3.2v3.4h-3.2z m-3.4-30v3.4h-3.4v-3.4h3.4z m-10 23.4v-3.4h3.4v3.4h-3.4z m3.4 6.6c-1.8 0-3.4-1.6-3.4-3.4h3.4v3.4z m23.2-30c1.8 0 3.4 1.6 3.4 3.4h-3.4v-3.4z m-10 0v3.4h-3.2v-3.4h3.2z m-16.6 10v-3.4h3.4v3.4h-3.4z m6.6 20v-3.4h3.4v3.4h-3.4z m-6.6-13.4v-3.2h3.4v3.2h-3.4z m0-13.2c0-1.8 1.6-3.4 3.4-3.4v3.4h-3.4z' })
                )
            );
        }
    }]);

    return MdSelectAll;
}(React.Component);

exports.default = MdSelectAll;
module.exports = exports['default'];