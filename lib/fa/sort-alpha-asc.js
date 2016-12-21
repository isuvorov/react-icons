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

var FaSortAlphaAsc = function (_React$Component) {
    _inherits(FaSortAlphaAsc, _React$Component);

    function FaSortAlphaAsc() {
        _classCallCheck(this, FaSortAlphaAsc);

        return _possibleConstructorReturn(this, (FaSortAlphaAsc.__proto__ || Object.getPrototypeOf(FaSortAlphaAsc)).apply(this, arguments));
    }

    _createClass(FaSortAlphaAsc, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.6 9.1h3.9l-1.6-4.9-0.2-1q-0.1-0.4-0.1-0.5h-0.1l0 0.5q0 0-0.1 0.4t-0.2 0.6z m-10.2 23q0 0.3-0.2 0.6l-7.1 7.1q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.2-7.1q-0.3-0.4-0.1-0.8 0.1-0.5 0.6-0.5h4.3v-30.7q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v30.7h4.3q0.3 0 0.5 0.2t0.2 0.5z m18.7 2.7v5.2h-13v-2l8.2-11.8q0.3-0.4 0.5-0.6l0.2-0.2v-0.1q0 0-0.1 0t-0.2 0q-0.3 0.1-0.7 0.1h-5.2v2.6h-2.6v-5.1h12.6v1.9l-8.2 11.9q-0.2 0.2-0.5 0.6l-0.2 0.2v0l0.3 0q0.2 0 0.7 0h5.5v-2.7h2.7z m2-20v2.3h-6.5v-2.3h1.7l-1-3.2h-5.5l-1 3.2h1.7v2.3h-6.4v-2.3h1.5l5.2-14.8h3.6l5.1 14.8h1.6z' })
                )
            );
        }
    }]);

    return FaSortAlphaAsc;
}(React.Component);

exports.default = FaSortAlphaAsc;
module.exports = exports['default'];