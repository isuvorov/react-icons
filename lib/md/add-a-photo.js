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

var MdAddAPhoto = function (_React$Component) {
    _inherits(MdAddAPhoto, _React$Component);

    function MdAddAPhoto() {
        _classCallCheck(this, MdAddAPhoto);

        return _possibleConstructorReturn(this, (MdAddAPhoto.__proto__ || Object.getPrototypeOf(MdAddAPhoto)).apply(this, arguments));
    }

    _createClass(MdAddAPhoto, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.3 23.4q0-2.3 1.6-3.9t3.7-1.5q2.3 0 3.9 1.5t1.5 3.9q0 2.1-1.5 3.7t-3.9 1.6-3.7-1.6-1.6-3.7z m5.3 8.2q3.5 0 5.9-2.4t2.5-5.8-2.5-5.9-5.9-2.5-5.8 2.5-2.4 5.9 2.4 5.8 5.8 2.4z m-11.6-15v-5h5v-5h11.6l3.1 3.4h5.3q1.3 0 2.3 1t1.1 2.4v20q0 1.3-1.1 2.3t-2.3 0.9h-26.6q-1.4 0-2.4-0.9t-1-2.3v-16.8h5z m-5-10v-5h3.4v5h5v3.4h-5v5h-3.4v-5h-5v-3.4h5z' })
                )
            );
        }
    }]);

    return MdAddAPhoto;
}(React.Component);

exports.default = MdAddAPhoto;
module.exports = exports['default'];