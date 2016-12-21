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

var MdTabletAndroid = function (_React$Component) {
    _inherits(MdTabletAndroid, _React$Component);

    function MdTabletAndroid() {
        _classCallCheck(this, MdTabletAndroid);

        return _possibleConstructorReturn(this, (MdTabletAndroid.__proto__ || Object.getPrototypeOf(MdTabletAndroid)).apply(this, arguments));
    }

    _createClass(MdTabletAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.1 31.6v-26.6h-24.2v26.6h24.2z m-8.7 5v-1.6h-6.8v1.6h6.8z m6.6-36.6c2.7 0 5 2.3 5 5v30c0 2.7-2.3 5-5 5h-20c-2.7 0-5-2.3-5-5v-30c0-2.7 2.3-5 5-5h20z' })
                )
            );
        }
    }]);

    return MdTabletAndroid;
}(React.Component);

exports.default = MdTabletAndroid;
module.exports = exports['default'];